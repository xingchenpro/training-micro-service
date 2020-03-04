package com.javahly.userservice.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

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
public class MyAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        //httpServletResponse.sendRedirect("http://localhost:8081/v1/user/success");
        String username = authentication.getName();
        httpServletRequest.getSession().setAttribute("username", username);
        System.err.println(httpServletRequest.getSession().getAttribute("username"));
        httpServletResponse.setContentType("application/json;charset=utf-8");
        PrintWriter out = httpServletResponse.getWriter();
        out.write("{\"resultCode\":\"200\",\"result\":\"登录成功!\",\"role\":" + "\"" + authentication.getAuthorities() + "\"}");
        out.flush();
        out.close();
        log.info("登录成功!");
    }
}
