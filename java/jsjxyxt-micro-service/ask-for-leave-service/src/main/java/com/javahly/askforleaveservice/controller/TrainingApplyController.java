package com.javahly.askforleaveservice.controller;

import com.codingapi.txlcn.tc.annotation.LcnTransaction;
import com.javahly.askforleaveservice.entity.Distribution;
import com.javahly.askforleaveservice.service.TrainingApplyService;
import com.javahly.askforleaveservice.util.Result;
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
@RestController
public class TrainingApplyController {

    @Autowired
    TrainingApplyService trainingApplyService;

    @Transactional
    @LcnTransaction
    @RequestMapping(value = "/training/distribution", method = RequestMethod.PUT)
    public Result updateStudentTrainingTeacher(@RequestBody Distribution distribution) {
        Result result = new Result();
        trainingApplyService.updateTeacher(distribution.gettId(), distribution.getStudents());
        return result;

    }
    /**
     * 根据指导教师ID查询学生ID
     * @param tId
     * @return
     */
    @RequestMapping(value = "/studentIds", method = RequestMethod.GET)
    public List<String> getStudentIdsByTeacherId(@RequestParam String tId) {
        List<String> sIds = trainingApplyService.getStudentIdsByTeacherId(tId);
        return sIds;
    }

}
