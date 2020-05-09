package com.javahly.askforleaveservice.controller;

import com.codingapi.txlcn.tc.annotation.LcnTransaction;
import com.javahly.askforleaveservice.entity.Distribution;
import com.javahly.askforleaveservice.entity.TrainingApply;
import com.javahly.askforleaveservice.feign.basic.entity.Student;
import com.javahly.askforleaveservice.feign.basic.service.BasicInformationService;
import com.javahly.askforleaveservice.service.TrainingApplyService;
import com.javahly.askforleaveservice.util.Result;
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
 * @QQ :1136513099
 * @desc :
 */
@Slf4j
@RestController
public class TrainingApplyController {

    @Autowired
    TrainingApplyService trainingApplyService;

    @Autowired
    BasicInformationService basicInformationService;

    /**
     * 实训分配，实训服务调用
     *
     * @param distribution
     * @return
     */
    @Transactional
    @LcnTransaction
    @RequestMapping(value = "/training/distribution", method = RequestMethod.PUT)
    public Result updateStudentTrainingTeacher(@RequestBody Distribution distribution) {
        Result result = new Result();
        trainingApplyService.updateTeacher(distribution.gettId(), distribution.getStudents());
        return result;
    }

    /**
     * 查看单位学生
     * 亮点：Feign 客户端传递 List 集合方法与技巧
     * @param uId
     * @return
     */
    @RequestMapping(value = "/unit/students", method = RequestMethod.GET)
    public Result getStudentsIdByUnitId(String uId) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        List<String> studentIds = trainingApplyService.getStudentsIdByUnitId(uId);
        log.info("TrainingApplyController：getStudentsIdByUnitId：{}", studentIds);
        List<Student> students = basicInformationService.getStudentByIds(studentIds);
        resultMap.put("students", students);
        result.setResult(resultMap);
        return result;
    }

    /**
     * 根据指导教师ID查询学生ID
     *
     * @param tId
     * @return
     */
    @RequestMapping(value = "/studentIds", method = RequestMethod.GET)
    public List<String> getStudentIdsByTeacherId(@RequestParam String tId) {
        List<String> sIds = trainingApplyService.getStudentIdsByTeacherId(tId);
        return sIds;
    }

}
