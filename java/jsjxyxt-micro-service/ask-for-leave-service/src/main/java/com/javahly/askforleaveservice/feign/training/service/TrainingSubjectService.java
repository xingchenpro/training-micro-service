package com.javahly.askforleaveservice.feign.training.service;

import com.javahly.askforleaveservice.feign.basic.entity.Teacher;
import com.javahly.askforleaveservice.feign.training.entity.TrainingSubject;
import com.javahly.askforleaveservice.util.Result;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/4/29
 * @QQ :1136513099
 * @desc :
 */
@Service
@FeignClient(value = "training-service")
public interface TrainingSubjectService {

    @RequestMapping(value = "/v1/training/subjects", method = RequestMethod.POST)
    Result addSubject(@RequestBody TrainingSubject subject);



}
