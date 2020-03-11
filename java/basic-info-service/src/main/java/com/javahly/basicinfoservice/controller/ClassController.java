package com.javahly.basicinfoservice.controller;

import com.javahly.basicinfoservice.cache.RedisKey;
import com.javahly.basicinfoservice.entity.Class;
import com.javahly.basicinfoservice.service.ClassService;
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
public class ClassController {

    @Resource
    private RedisTemplate<String,Object> redisTemplate;

    @Autowired
    private ClassService classService;

    /**
     *  班级信息
     */
    @RequestMapping(value = "/classes", method = RequestMethod.GET)
    public List<Class> getClasses() {
        Result result = new Result();
        List<Class> classes = classService.getClasses();
        //添加到缓存
        //redisTemplate.opsForValue().set(RedisKey.CLASSES_KEY, classes, 7, TimeUnit.DAYS);
        return classes;
    }


}
