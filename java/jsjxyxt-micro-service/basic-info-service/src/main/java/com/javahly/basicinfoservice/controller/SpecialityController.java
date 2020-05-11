package com.javahly.basicinfoservice.controller;

import com.javahly.basicinfoservice.cache.RedisKey;
import com.javahly.basicinfoservice.entity.Speciality;
import com.javahly.basicinfoservice.service.SpecialityService;
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
public class SpecialityController {

    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    private SpecialityService specialityService;

    /**
     * 专业信息
     */
    @RequestMapping(value = "/specialities", method = RequestMethod.GET)
    public List<Speciality> getSpecialities() {
        Result result = new Result();
        List<Speciality> specialities = specialityService.getSpecialities();
        redisTemplate.opsForValue().set(RedisKey.SPECIALITIES_KEY, specialities, 7, TimeUnit.DAYS);
        result.setResult(specialities);
        return specialities;
    }


}
