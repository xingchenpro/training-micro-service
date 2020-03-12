package com.javahly.askforleaveservice.controller;




import com.javahly.askforleaveservice.cache.RedisKey;
import com.javahly.askforleaveservice.feign.user.entity.Teacher;
import com.javahly.askforleaveservice.feign.user.service.TeacherService;
import com.javahly.askforleaveservice.util.JsonListUtil;
import com.javahly.askforleaveservice.util.RedisUtil;
import com.javahly.askforleaveservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


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
    TeacherService teacherService;

    @RequestMapping(value = "/leaves", method = RequestMethod.GET)
    public Result getLeaves() {
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
