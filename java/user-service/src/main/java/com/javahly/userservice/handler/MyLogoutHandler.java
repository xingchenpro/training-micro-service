package com.javahly.userservice.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
public class MyLogoutHandler implements LogoutHandler {
    //logout默认的url是 /logout,如果csrf启用，则请求方式是POST，否则请求方式是GET、POST、PUT、DELETE
    @Override
    public void logout(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) {
        httpServletRequest.getSession().invalidate();
        log.info("注销成功！");
    }
}
