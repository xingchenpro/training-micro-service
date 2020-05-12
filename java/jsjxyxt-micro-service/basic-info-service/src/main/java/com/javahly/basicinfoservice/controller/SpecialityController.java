package com.javahly.basicinfoservice.controller;

import com.javahly.basicinfoservice.cache.RedisKey;
import com.javahly.basicinfoservice.entity.Speciality;
import com.javahly.basicinfoservice.service.SpecialityService;
import com.javahly.basicinfoservice.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    /**
     * 查询专业信息放到hash
     * @return
     */
    @RequestMapping(value = "/hash/specialities", method = RequestMethod.GET)
    public Map<String,Speciality> getHashSpecialities() {
        List<Speciality> specialities = specialityService.getSpecialities();
        Map<String,Speciality> specialitiesHash = new HashMap<>(1<<4);
        //放到Hash里面
        for (int i = 0; i < specialities.size(); i++) {
            specialitiesHash.put(specialities.get(i).getSpecId(),specialities.get(i));
        }
        //redisTemplate.opsForValue().set(RedisKey.STUDENTS_KEY, students, 7, TimeUnit.DAYS);
        return specialitiesHash;
    }

    /**
     * 根据教师号查询专业信息
     * @return
     */
    @RequestMapping(value = "/speciality", method = RequestMethod.GET)
    public String getSpecialityByTeacherId(@RequestParam("tId") String tId) {
        String specId = specialityService.getSpecialityIdByTeacherId(tId);
        return specId;
    }
}
