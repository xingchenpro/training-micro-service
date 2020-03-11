package com.javahly.askforleave.feign.user.service;

import com.javahly.askforleave.feign.user.entity.Teacher;
import org.springframework.cloud.openfeign.FeignClient;
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
@FeignClient(value = "basic-info-service")
public interface TeacherService {

    @RequestMapping(value = "/v1/info/teachers", method = RequestMethod.GET)
    List<Teacher> getTeachers();

}
