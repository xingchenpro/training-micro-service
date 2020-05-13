package com.javahly.uaaservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/13
 * @QQ :1136513099
 * @desc :
 */

@RestController
public class TestController {

    @GetMapping("/test")
    public String test(){
        return "TEST";
    }
}
