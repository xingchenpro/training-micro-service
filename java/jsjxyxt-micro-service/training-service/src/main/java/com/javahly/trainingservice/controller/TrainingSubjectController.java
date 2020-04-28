package com.javahly.trainingservice.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javahly.trainingservice.entity.TrainingSubject;
import com.javahly.trainingservice.service.TrainingSubjectService;
import com.javahly.trainingservice.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 */

@RestController
public class TrainingSubjectController {


    @Autowired
    TrainingSubjectService trainingSubjectService;

    //学生查询自己的课题
    @RequestMapping(value = "/subject", method = RequestMethod.GET)
    public Result getSubject(String sId) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        try {
            TrainingSubject  trainingSubject = trainingSubjectService.getTrainingSubject(sId);
            resultMap.put("subject", trainingSubject);
            result.setResult(resultMap);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }


}
