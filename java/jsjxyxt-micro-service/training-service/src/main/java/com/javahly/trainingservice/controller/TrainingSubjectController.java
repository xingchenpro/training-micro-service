package com.javahly.trainingservice.controller;

import com.codingapi.txlcn.tc.annotation.LcnTransaction;

import com.javahly.trainingservice.entity.Distribution;
import com.javahly.trainingservice.entity.SubjectExamine;
import com.javahly.trainingservice.entity.TrainingSubject;
import com.javahly.trainingservice.feign.basic.entity.Student;
import com.javahly.trainingservice.feign.basic.service.BasicInformationService;
import com.javahly.trainingservice.service.TrainingSubjectService;
import com.javahly.trainingservice.feign.leave.service.LeaveService;
import com.javahly.trainingservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 */
@Slf4j
@RestController
public class TrainingSubjectController {

    @Autowired
    TrainingSubjectService trainingSubjectService;

    @Autowired
    BasicInformationService basicInformationService;

    @Autowired
    private LeaveService leaveService;

    /**
     * 学生查询自己的课题
     *
     * @param sId
     * @return
     */
    @RequestMapping(value = "/subject", method = RequestMethod.GET)
    public Result getSubject(String sId) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        try {
            TrainingSubject trainingSubject = trainingSubjectService.getTrainingSubject(sId);
            resultMap.put("subject", trainingSubject);
            result.setResult(resultMap);
        } catch (Exception e) {
            result.setResultCode(500);
            return result;
        }
        return result;
    }

    /**
     * 添加课题
     *
     * @param subject
     * @return
     */
    @RequestMapping(value = "/subject", method = RequestMethod.POST)
    public Result addSubject(@RequestBody TrainingSubject subject) {
        Result result = new Result();
        TrainingSubject trainingSubject = trainingSubjectService.getTrainingSubject(subject.getsId());
        //如果查询结果为空就添加
        if (trainingSubject == null) {
            try {
                trainingSubjectService.addTrainingSubject(subject);
            } catch (Exception e) {
                result.setResultCode(500);
                return result;
            }
        }
        return result;
    }

    /**
     * 修改课题
     *
     * @param subject
     * @return
     */
    @RequestMapping(value = "/subject", method = RequestMethod.PUT)
    public Result updateSubject(@RequestBody TrainingSubject subject) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        try {
            trainingSubjectService.updateTrainingSubject(subject);
        } catch (Exception e) {
            result.setResultCode(500);
            return result;
        }
        TrainingSubject trainingSubject = trainingSubjectService.getTrainingSubject(subject.getsId());
        resultMap.put("subject", trainingSubject);
        result.setResult(resultMap);
        return result;
    }


    /**
     * 指导教师，专业负责人,获得课题+学生信息
     *
     * @param role
     * @return
     */
    @RequestMapping(value = "/subjects", method = RequestMethod.GET)
    public Result getTrainingSubjectsByTeacherIdOrSpec(String tId, int role) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        if (role == 3) {
            List<TrainingSubject> subjects = trainingSubjectService.getTrainingSubjectsByTId(tId);
            resultMap.put("subjects", subjects);
            result.setResult(resultMap);
        }
        if (role == 4) {

        }
        return result;
    }

    //课题审核,专业负责人和指导教师审核
    @RequestMapping(value = "/examine/subject", method = RequestMethod.PUT)
    public Result updateTrainingSubject(@RequestBody SubjectExamine examine) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        String role = examine.getRole();
        if (role.equals("3")) {
            trainingSubjectService.updateTrainingSubjectStatus(examine.getsId(), examine.getStatus(), examine.getReason());
            List<TrainingSubject> subjects = trainingSubjectService.getTrainingSubjectsByTId(examine.getTutor());
            Map<String,Student> studentHash = basicInformationService.getHashStudents();
            for (int i=0;i<subjects.size();i++){
                subjects.get(i).setStudent(studentHash.get(subjects.get(i).getsId()));
            }
            resultMap.put("subjects", subjects);
            result.setResult(resultMap);
        }
        if (role.equals("4")) {

        }
        return result;
    }


    /**
     * 获得实训分配信息
     *
     * @param tId
     * @return
     */
    @RequestMapping(value = "/training/distribution", method = RequestMethod.GET)
    public Result getStudentTrainingInfo(String tId) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        //TODO 获得该教师的专业号
        String specId = "101";
        //根据专业号获得课题信息
        List<TrainingSubject> trainingSubjects = trainingSubjectService.getTrainingSubjectsBySpecId(specId);
        Map<String,Student> studentHash = basicInformationService.getHashStudents();
        for (int i=0;i<trainingSubjects.size();i++){
            trainingSubjects.get(i).setStudent(studentHash.get(trainingSubjects.get(i).getsId()));
        }
        resultMap.put("trainingSubjects", trainingSubjects);
        result.setResult(resultMap);
        return result;
    }

    /**
     * 为学生分配指导教师，涉及两个数据库两个表，涉及分布式事务
     *
     * @param distribution
     * @return
     */
    @Transactional
    @LcnTransaction
    @RequestMapping(value = "/training/distribution", method = RequestMethod.PUT)
    public Result updateStudentTrainingTeacher(@RequestBody Distribution distribution) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        log.info("updateStudentTrainingTeacher：{}", distribution.getStudents());
        trainingSubjectService.updateTeacher(distribution.gettId(), distribution.getStudents());
        leaveService.updateStudentTrainingTeacher(distribution);
        //TODO 根据教师ID查找专业号
        String specId = "101";
        List<TrainingSubject> trainingSubjects = trainingSubjectService.getTrainingSubjectsBySpecId(specId);
        Map<String,Student> studentHash = basicInformationService.getHashStudents();
        for (int i=0;i<trainingSubjects.size();i++){
            trainingSubjects.get(i).setStudent(studentHash.get(trainingSubjects.get(i).getsId()));
        }
        resultMap.put("trainingSubjects", trainingSubjects);
        result.setResult(resultMap);
        //int i = 1/0;
        return result;
    }

    /**
     * 获得学生实训信息
     * @return
     */
    @RequestMapping(value = "/training/info", method = RequestMethod.GET)
    public Result getStudentTrainingInfo() {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        //获得所有课题
        List<TrainingSubject> trainingSubjects = trainingSubjectService.getTrainingSubjects();
        Map<String,Student> studentHash = basicInformationService.getHashStudents();
        for (int i=0;i<trainingSubjects.size();i++){
            trainingSubjects.get(i).setStudent(studentHash.get(trainingSubjects.get(i).getsId()));
        }
        resultMap.put("trainingInfo",trainingSubjects);
        result.setResult(resultMap);
        return result;
    }
}
