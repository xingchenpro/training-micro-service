package com.javahly.uaaservice.dao;



import com.javahly.uaaservice.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :blog.csdn.net/Sirius_hly
 * @date :2020/3/20
 */

@Repository
public interface UserDao {

    //通过用户名查询用户
    public User findUserByUsername(String username);

    //修改密码
    public int updatePassWord(@Param("newPassword") String newPassword,@Param("username") String username);

}
