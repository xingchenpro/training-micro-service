package com.javahly.trainingservice.feign.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 * @QQ :1136513099
 * @desc :
 */
@Service
@FeignClient(value = "ask-for-leave-service")
public interface LeaveService {

    @RequestMapping(value = "/v1/leave/studentIds", method = RequestMethod.GET)
    List<String> getStudentIdsByTeacherId(@RequestParam("tId") String tId);


}
