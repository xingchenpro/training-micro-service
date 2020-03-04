package com.javahly.userservice.controller;

import com.javahly.userservice.util.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/4
 * @QQ :1136513099
 * @desc :
 */
@RestController
public class ErrorController {

    @RequestMapping("/error/401")
    public Result error401() {
        return new Result(401,"没有权限");
    }

    @RequestMapping("/error/403")
    public Result error403() {
        return new Result(403,"拒绝访问");
    }

    @RequestMapping("/error/404")
    public Result error404() {
        return new Result(404,"资源不存在");
    }

    @RequestMapping("/error/400")
    public Result error400() {
        return new Result(400,"无效请求");
    }

    @RequestMapping("/error/415")
    public Result error415() {
        return new Result(415,"不支持的媒介");
    }

    @RequestMapping("/error/500")
    public Result error500() {
        return new Result(500,"服务器内部错误");
    }
}
