package com.javahly.userservice.controller;

import com.javahly.userservice.util.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :blog.csdn.net/Sirius_hly
 * @date :2019/3/25
 */

@RestController
public class LoginController {


    /**
     * 登录成功
     *
     * @return
     */
    @RequestMapping("/success")
    public Result success() {
        Result result = new Result(200, "登录成功!");
        return result;
    }

    /**
     * 登录失败
     *
     * @return
     */
    @RequestMapping("/fail")
    public Result fail() {
        Result result = new Result();
        result.setErrInfos(401, "用户名或密码错误!");
        return result;
    }

    /**
     * 注销
     *
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


