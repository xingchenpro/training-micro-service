package com.javahly.uaaservice.controller;

import com.javahly.uaaservice.service.UserService;
import com.javahly.uaaservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.endpoint.TokenEndpoint;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/25
 * @QQ :1136513099
 * @desc : 自定义OAuth 返回信息
 */
@Slf4j
@RestController
@RequestMapping("/oauth")
public class OauthController {

/*    @Autowired
    private TokenEndpoint tokenEndpoint;*/

    @Autowired
    UserService userService;

    @PostMapping("/token")
    public Result login(Principal principal, @RequestParam Map<String, String> parameters) throws HttpRequestMethodNotSupportedException {

        UserDetails userDetails = userService.loadUserByUsername(parameters.get("username"));
        //OAuth2AccessToken accessToken = tokenEndpoint.postAccessToken(principal, parameters).getBody();
        //log.info("用户信息：{}, token 信息：{}", userDetails,accessToken);
        Map<String, Object> data = new LinkedHashMap();
       /* data.put("accessToken", accessToken.getValue());
        if (accessToken.getRefreshToken() != null) {
            data.put("refreshToken", accessToken.getRefreshToken().getValue());
        }*/
        Result result = new Result();
        //添加基本信息
        data.put("userId", userDetails.getUsername());
        data.put("role", userDetails.getAuthorities());
        result.setResult(data);
        return result;
    }


}

