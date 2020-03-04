package com.javahly.userservice.service;

import com.javahly.userservice.entity.User;

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
public interface UserService {

    //修改密码
    public int updatePassWord(Map<String, Object> map);

    //查看信息
    public User selectUser(Map<String, Object> map);
}
