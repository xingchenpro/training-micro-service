package com.javahly.basicinfoservice.controller;

import com.javahly.basicinfoservice.cache.RedisKey;
import com.javahly.basicinfoservice.entity.Student;
import com.javahly.basicinfoservice.service.StudentService;
import com.javahly.basicinfoservice.util.Result;
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
public class StudentController {

    @Resource
    private RedisTemplate<String,Object> redisTemplate;

    @Autowired
    private StudentService studentService;

    /**
     * 获得所有学生信息
     */
    @RequestMapping(value = "/students",method = RequestMethod.GET)
    public Result getStudents(){
        Result result = new Result();
        List<Student> students = studentService.getStudents();
        redisTemplate.opsForValue().set(RedisKey.STUDENTS_KEY, students, 7, TimeUnit.DAYS);
        result.setResult(students);
        return result;
    }

}
