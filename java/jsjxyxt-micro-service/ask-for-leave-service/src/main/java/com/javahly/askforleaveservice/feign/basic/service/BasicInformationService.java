package com.javahly.askforleaveservice.feign.basic.service;

import com.javahly.askforleaveservice.feign.basic.entity.Student;
import com.javahly.askforleaveservice.feign.basic.entity.Teacher;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
@Service
@FeignClient(value = "basic-info-service")
public interface BasicInformationService {

    @RequestMapping(value = "/v1/info/teachers", method = RequestMethod.GET)
    List<Teacher> getTeachers();

    @RequestMapping(value = "/v1/info/students", method = RequestMethod.GET)
    List<Student> getStudents();

}
