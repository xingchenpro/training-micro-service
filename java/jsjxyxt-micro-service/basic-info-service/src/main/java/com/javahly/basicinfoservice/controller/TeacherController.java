package com.javahly.basicinfoservice.controller;

import com.alibaba.fastjson.JSON;
import com.javahly.basicinfoservice.cache.RedisKey;
import com.javahly.basicinfoservice.entity.Teacher;
import com.javahly.basicinfoservice.service.TeacherService;
import com.javahly.basicinfoservice.util.RedisUtil;
import com.javahly.basicinfoservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.concurrent.TimeUnit;

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
public class TeacherController {

    @Autowired
    RedisUtil redisUtil;

    @Autowired
    private TeacherService teacherService;

    /**
     * 获得所有教师信息
     */
    @RequestMapping(value = "/teachers", method = RequestMethod.GET)
    public List<Teacher> getTeacher() {
        return teacherService.getTeachers();
    }

}
