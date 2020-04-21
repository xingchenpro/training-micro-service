package com.javahly.askforleaveservice.controller;


import com.javahly.askforleaveservice.cache.RedisKey;
import com.javahly.askforleaveservice.entity.Leave;
import com.javahly.askforleaveservice.entity.TrainingApply;
import com.javahly.askforleaveservice.feign.user.entity.Teacher;
import com.javahly.askforleaveservice.feign.user.service.TeacherService;
import com.javahly.askforleaveservice.service.LeaveService;
import com.javahly.askforleaveservice.service.TrainingApplyService;
import com.javahly.askforleaveservice.util.JsonListUtil;
import com.javahly.askforleaveservice.util.RedisUtil;
import com.javahly.askforleaveservice.util.Result;
import com.netflix.discovery.converters.Auto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
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
    TeacherService teacherService;

    //添加请假信息
    @RequestMapping(value = "/leave", method = RequestMethod.POST)
    public Result addLeaveInfo(Leave leave, TrainingApply trainingApply) {
        Result result = new Result();
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
     * 测试
     *
     * @return
     */
    @RequestMapping(value = "/teachers", method = RequestMethod.GET)
    public Result getTeacher() {
        Result result = new Result();

        List<Teacher> teachers;
        String json = redisUtil.getString(RedisKey.TEACHERs_KEY);
        if (json != null) {
            teachers = JsonListUtil.jsonToList(json, Teacher.class);
            result.setResult(teachers);
            return result;
        }
        teachers = teacherService.getTeachers();
        redisUtil.setString(RedisKey.TEACHERs_KEY, JsonListUtil.listToJson(teachers));
        result.setResult(teachers);
        return result;
    }


}
