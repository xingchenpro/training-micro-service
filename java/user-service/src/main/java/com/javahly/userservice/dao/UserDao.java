package com.javahly.userservice.dao;


import com.javahly.userservice.entity.User;
import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/2
 * @QQ :1136513099
 * @desc :
 */
@Repository
public interface UserDao {

    //修改密码
    public int updatePassWord(Map<String, Object> map);

    //查看信息
    public User selectUser(Map<String, Object> map);
}
