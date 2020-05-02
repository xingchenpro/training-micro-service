package com.javahly.askforleaveservice.controller;

import com.javahly.askforleaveservice.service.TrainingApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
