package com.javahly.trainingservice.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javahly.trainingservice.entity.SubjectExamine;
import com.javahly.trainingservice.entity.TrainingSubject;
import com.javahly.trainingservice.service.TrainingSubjectService;
import com.javahly.trainingservice.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
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

@RestController
public class TrainingSubjectController {

    @Autowired
    TrainingSubjectService trainingSubjectService;

    /**
     * 学生查询自己的课题
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
     * @param role
     * @return
     */
    @RequestMapping(value = "/subjects", method = RequestMethod.GET)
    public Result getTrainingSubjectsByTeacherIdOrSpec(String tId, int role) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        if(role==3){
            List<TrainingSubject> subjects = trainingSubjectService.getTrainingSubjectsByTId(tId);
            resultMap.put("subjects",subjects);
            result.setResult(resultMap);
        }
        if(role==4){

        }
        return result;
    }

    //课题审核,专业负责人和指导教师审核
    @RequestMapping(value = "/examine/subject", method = RequestMethod.PUT)
    public Result updateTrainingSubject(@RequestBody SubjectExamine examine) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        String role = examine.getRole();
        if (role.equals("3")){
            trainingSubjectService.updateTrainingSubjectStatus(examine.getsId(),examine.getStatus(),examine.getReason());
            List<TrainingSubject> subjects = trainingSubjectService.getTrainingSubjectsByTId(examine.getTutor());
            resultMap.put("subjects",subjects);
            result.setResult(resultMap);
        }
        if (role.equals("4")){

        }
        return result;
    }

}
