package com.javahly.userservice.controller;

import com.javahly.userservice.util.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :blog.csdn.net/Sirius_hly
 * @date :2020/3/2
 */

@RestController
public class LoginController {


    /**
     * 登录页，未登录返回
     * @return
     */
    @RequestMapping("/loginPage")
    public Result page() {
        return new Result(401, "请登录");
    }

    @RequestMapping(value = "/admin")
    public String admin() {
        return "admin";
    }

}


