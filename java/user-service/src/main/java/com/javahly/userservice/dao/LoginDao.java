package com.javahly.userservice.dao;

import com.javahly.userservice.entity.User;
import org.springframework.stereotype.Repository;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :blog.csdn.net/Sirius_hly
 * @date :2020/3/2
 */
@Repository
public interface LoginDao {

    //通过用户名查询用户
    public User findUserByUsername(String username);

}
