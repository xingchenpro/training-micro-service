package com.javahly.userservice.controller;

import com.javahly.userservice.entity.User;
import com.javahly.userservice.service.UserService;
import com.javahly.userservice.util.BPwdEncoderUtils;
import com.javahly.userservice.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2019/6/8
 * @QQ :1136513099
 * @desc :
 */
@RestController
public class UserController {

    @Autowired
    UserService userService;

    //修改密码
    @RequestMapping(value = "/password",method = RequestMethod.PATCH)
    public Result updatePassWord(HttpServletRequest request, String newPassword, String oldPassword){
        Result result = new Result();
        Map<String, Object> paramMap = new HashMap<>();
        String username = (String) request.getSession().getAttribute("username");
        if(username!=null&&!"".equals(username.trim())){
            paramMap.put("username",username);
            User user = userService.selectUser(paramMap);
           if(BPwdEncoderUtils.matches(oldPassword,user.getPassword())){
               try {
                   paramMap.put("newPassword",BPwdEncoderUtils.BCryptPassword(newPassword));
                   userService.updatePassWord(paramMap);
               } catch (Exception e) {
                   result.setBusErrInfos("","修改密码失败!!!");
                   e.printStackTrace();
               }
           }else{
               result.setErrInfos(403,"修改密码失败!!!","原始密码错误!!!");
           }
        }
        return result;
    }
}
