package com.javahly.uaaservice.controller;

import com.javahly.uaaservice.service.impl.UserService;
import com.javahly.uaaservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.TimeUnit;

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
    private StringRedisTemplate redisTemplate;

    @Autowired
    UserService userService;


    @Autowired
    PasswordEncoder passwordEncoder;


    @PostMapping("/token")
    public Result login(@RequestParam Map<String, String> parameters) {
        Result result = new Result();
        UserDetails userDetails = null;
        String username = null;
        try {
            userDetails = userService.loadUserByUsername(parameters.get("username"));
            username = userDetails.getUsername();
        } catch (Exception e) {
            result.setErrInfos(401, "没有权限");
            return result;
        }
        Map<String, Object> data = new HashMap<>(1 << 4);
        //加密前，加密后是否符合，多次加密结果不同
        if (passwordEncoder.matches(parameters.get("password"), userDetails.getPassword())) {
            //保存Token,key 为 username MD5加密,value 为生成的 随机数
            String newToken = saveToken(DigestUtils.md5Hex(username));
            //添加基本信息
            data.put("userId", username);
            data.put("role", userDetails.getAuthorities());
            data.put("token", newToken);
            result.setResult(data);
            return result;
        } else {
            result.setErrInfos(401, "没有权限");
            return result;
        }
    }

    //修改密码
    @RequestMapping(value = "/password", method = RequestMethod.PUT)
    public Result updatePassWord(String newPassword, String oldPassword, String username) {
        Result result = new Result();
        UserDetails userDetails = userService.loadUserByUsername(username);
        if (!passwordEncoder.matches(oldPassword, userDetails.getPassword())) {
            result.setErrInfos(500, "修改失败");
            return result;
        }
        try {
            userService.updatePassWord(passwordEncoder.encode(newPassword), username);
        } catch (Exception e) {
            result.setErrInfos(500, "修改失败");
            return result;
        }
        return result;
    }

    /**
     * 生成随机数
     */
    private String generateToken(String username) {
        String character = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // md5(用户id + 随机串 + 渠道id)
        String randomString = DigestUtils.md5Hex(username + character.substring(new Random().nextInt(60) + 1, 62));
        //字符串拼接8位随串
        randomString = randomString.concat(RandomStringUtils.randomAlphabetic(8));
        return randomString;
    }

    /**
     * 保存Token
     */
    private String saveToken(String username) {

        String existToken = redisTemplate.opsForValue().get(username);
        String newToken = generateToken(username);
        if (!StringUtils.isEmpty(existToken)) {
            redisTemplate.delete(username);
            redisTemplate.opsForValue().set(username, newToken, 2*3600, TimeUnit.SECONDS);
        } else {
            redisTemplate.opsForValue().set(username, newToken, 2*3600, TimeUnit.SECONDS);
        }
        return newToken;
    }
}

