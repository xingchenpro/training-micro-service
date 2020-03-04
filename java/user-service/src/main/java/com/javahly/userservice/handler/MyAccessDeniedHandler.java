package com.javahly.userservice.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/4
 * @QQ :1136513099
 * @desc :
 */
@Component
@Slf4j
public class MyAccessDeniedHandler implements AccessDeniedHandler {
    //登录之后访问资源没有权限则跳转
    @Override
    public void handle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AccessDeniedException e) throws IOException, ServletException {
        //httpServletResponse.sendRedirect("/fail");
        httpServletResponse.setContentType("application/json;charset=utf-8");
        PrintWriter out = httpServletResponse.getWriter();
        out.write("{\"resultCode\":\"401\",\"result\":\"权限不足!\"}");
        out.flush();
        out.close();
        log.info("权限不足");
    }
}
