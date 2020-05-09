package com.javahly.trainingservice.feign.basic.service;

import com.javahly.trainingservice.feign.basic.entity.Student;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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
@Service
@FeignClient(value = "basic-info-service")
public interface BasicInformationService {

    @RequestMapping(value = "/v1/info/students", method = RequestMethod.GET)
    List<Student> getStudents();

    @RequestMapping(value = "/v1/info/hash/students", method = RequestMethod.GET)
    Map<String,Student> getHashStudents();

    @RequestMapping(value = "/v1/info/part/students",method = RequestMethod.POST)
    @ResponseBody
    List<Student> getStudentByIds(@RequestBody List<String> studentIds);

}
