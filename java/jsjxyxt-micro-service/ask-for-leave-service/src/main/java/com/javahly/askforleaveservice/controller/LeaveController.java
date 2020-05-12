package com.javahly.askforleaveservice.controller;

import com.javahly.askforleaveservice.cache.RedisKey;
import com.javahly.askforleaveservice.enmu.LeaveStatusEnum;
import com.javahly.askforleaveservice.entity.Leave;
import com.javahly.askforleaveservice.entity.TrainingApply;
import com.javahly.askforleaveservice.feign.basic.entity.Student;
import com.javahly.askforleaveservice.feign.basic.entity.Teacher;
import com.javahly.askforleaveservice.feign.basic.service.BasicInformationService;
import com.javahly.askforleaveservice.feign.training.entity.TrainingSubject;
import com.javahly.askforleaveservice.feign.training.service.TrainingSubjectService;
import com.javahly.askforleaveservice.mq.service.TrainingSubjectMqService;
import com.javahly.askforleaveservice.service.LeaveService;
import com.javahly.askforleaveservice.service.TrainingApplyService;
import com.javahly.askforleaveservice.util.InfoUtil;
import com.javahly.askforleaveservice.util.JsonListUtil;
import com.javahly.askforleaveservice.util.RedisUtil;
import com.javahly.askforleaveservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/11
 * @QQ :1136513099
 * @desc :
 */
@RestController
@Slf4j
public class LeaveController {

    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    LeaveService leaveService;

    @Autowired
    TrainingApplyService trainingApplyService;

    @Autowired
    BasicInformationService basicInfoService;

    @Autowired
    TrainingSubjectService trainingSubjectService;

    @Autowired
    TrainingSubjectMqService subjectMqService;


    //添加请假信息
    @RequestMapping(value = "/leave", method = RequestMethod.POST)
    public Result addLeaveInfo(Leave leave, TrainingApply trainingApply) {
        Result result = new Result();
        //TODO 查询学生的专业信息
        trainingApply.setSpecId("101");
        trainingApplyService.addTrainingApplyInfo(trainingApply);
        leave.setApId(trainingApply.getApId());
        leaveService.addLeaveInfo(leave);
        return result;
    }

    //查询请假信息
    @RequestMapping(value = "/leave", method = RequestMethod.GET)
    public Result addLeaveInfo(String sId) {
        Result result = new Result();
        Leave leave = leaveService.getLeaveInfo(sId);
        TrainingApply trainingApply = null;
        if (leave != null) {
            trainingApply = trainingApplyService.getTrainingApplyInfoById(leave.getApId());
        }
        Map<String, Object> map = new HashMap<>();
        if (trainingApply != null) {
            map.put("leave", leave);
            map.put("trainingApply", trainingApply);
            result.setResult(map);
            return result;
        }
        result.setErrInfos(404, "结果不存在");
        return result;
    }


    /**
     * 获得请假信息
     * 角色，返回的请假状态
     * 2,0 辅导员
     * 3,1 指导教师
     * 4,2 专业负责人
     *
     * @param tId
     * @param role
     * @return
     */
    @RequestMapping(value = "leaves", method = RequestMethod.GET)
    public Result getLeaves(@RequestParam("tId") String tId, @RequestParam("role") int role) {

        Result result = new Result();
        //获取角色对应的需要审批的请假状态
        int leStatus = LeaveStatusEnum.getStatus(role);
        //远程调用 学生信息
        List<Student> students = basicInfoService.getStudents();
        //查询所有请假信息
        List<Leave> allLeaves = leaveService.getLeaves();
        //需要审核
        List<Leave> needExamineLeaves;
        //已经审核
        List<Leave> examinedLeaves;

        //辅导员
        if (role == 2) {
            needExamineLeaves = leaveService.getLeaves(leStatus);
            examinedLeaves = leaveService.getExaminedLeavesInfo(leStatus + 1);
            result.setResult(matchingStudentInfo(allLeaves, needExamineLeaves, examinedLeaves, students));
        }
        //指导教师
        if (role == 3) {
            needExamineLeaves = leaveService.getLeaves(leStatus, tId);
            examinedLeaves = leaveService.getExaminedLeavesInfo(leStatus + 1, tId);
            result.setResult(matchingStudentInfo(allLeaves, needExamineLeaves, examinedLeaves, students));
        }
        //专业负责人
        if (role == 4) {
            //远程调用专业信息
            String specId = basicInfoService.getSpecialityId(tId);
            //这里 specId 需要转化一下类型
            needExamineLeaves = leaveService.getLeaves(leStatus, Integer.valueOf(specId));
            examinedLeaves = leaveService.getExaminedLeavesInfo(leStatus + 1, Integer.valueOf(specId));
            result.setResult(matchingStudentInfo(allLeaves, needExamineLeaves, examinedLeaves, students));
        }
        return result;
    }

    //匹配学生信息
    private Map<String, Object> matchingStudentInfo(List<Leave> allLeaves, List<Leave> needExamineLeaves, List<Leave> examinedLeaves, List<Student> students) {
        Map<String, Object> resultMap = new HashMap<>();
        needExamineLeaves = InfoUtil.matchingStudentInfo(needExamineLeaves, students);
        examinedLeaves = InfoUtil.matchingStudentInfo(examinedLeaves, students);
        allLeaves = InfoUtil.matchingStudentInfo(allLeaves, students);
        resultMap.put("allLeaves", allLeaves);
        resultMap.put("needExamineLeaves", needExamineLeaves);
        resultMap.put("examinedLeaves", examinedLeaves);
        return resultMap;
    }


    /**
     * 审核请假信息
     * 审核请假信息
     * 0 否决 ，1 同意 ， -1 撤回
     *
     * @param leStatus
     * @param leId
     * @param role
     * @param tId
     * @param sId
     * @param leBackReason
     * @return
     */
    @RequestMapping(value = "/examine", method = RequestMethod.POST)
    public Result updateExamineStatus(int leStatus, int leId, int role, String tId, String title, String sId, String leBackReason) {
        Result result = new Result();
        if (leStatus == 0) {
            if (role == 2) leStatus = -1;
            if (role == 3) leStatus = -3;
            if (role == 4) leStatus = -5;
        }
        //远程调用 学生信息
        List<Student> students = basicInfoService.getStudents();
        //更新请假信息
        //辅导员
        //查询所有请假信息
        List<Leave> allLeaves = leaveService.getLeaves();
        //需要审核
        List<Leave> needExamineLeaves;
        //已经审核
        List<Leave> examinedLeaves;

        if (role == 2) {
            leaveService.updateExamineStatus(leStatus, leId, leBackReason);
            //获得查询请假信息
            leStatus = LeaveStatusEnum.getStatus(role);
            needExamineLeaves = leaveService.getLeaves(leStatus);
            examinedLeaves = leaveService.getExaminedLeavesInfo(leStatus + 1);
            result.setResult(matchingStudentInfo(allLeaves, needExamineLeaves, examinedLeaves, students));
        }
        //指导教师
        if (role == 3) {
            leaveService.updateExamineStatus(leStatus, leId, leBackReason);
            //获得查询请假信息
            leStatus = LeaveStatusEnum.getStatus(role);
            needExamineLeaves = leaveService.getLeaves(leStatus, tId);
            examinedLeaves = leaveService.getExaminedLeavesInfo(leStatus + 1, tId);
            result.setResult(matchingStudentInfo(allLeaves, needExamineLeaves, examinedLeaves, students));
        }
        //专业负责人
        if (role == 4) {
            //远程调用专业信息
            String specId = basicInfoService.getSpecialityId(tId);
            //leaveService.updateExamineStatus(leStatus, leId, leBackReason);
            //专业负责人审核通过后更新实训表
            TrainingSubject subject = new TrainingSubject();
            subject.setsId(sId);
            subject.setTitle(title);
            subject.setTutor(tId);
            subject.setSpecId(specId);
            subjectMqService.save(subject, leStatus, leId, leBackReason);
            //获得查询请假信息
            leStatus = LeaveStatusEnum.getStatus(role);
            //这里 specId 需要转化一下类型
            needExamineLeaves = leaveService.getLeaves(leStatus, Integer.valueOf(specId));
            examinedLeaves = leaveService.getExaminedLeavesInfo(leStatus + 1, Integer.valueOf(specId));
            result.setResult(matchingStudentInfo(allLeaves, needExamineLeaves, examinedLeaves, students));

        }
        return result;
    }

}
