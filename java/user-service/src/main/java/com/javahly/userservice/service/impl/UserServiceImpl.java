package com.javahly.userservice.service.impl;

import com.javahly.userservice.dao.UserDao;
import com.javahly.userservice.entity.User;
import com.javahly.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao;
    @Override
    public int updatePassWord(Map<String, Object> map) {
        return userDao.updatePassWord(map);
    }

    @Override
    public User selectUser(Map<String, Object> map) {
        return userDao.selectUser(map);
    }
}
