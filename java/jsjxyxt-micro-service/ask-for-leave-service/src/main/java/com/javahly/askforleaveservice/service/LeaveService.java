package com.javahly.askforleaveservice.service;

import com.javahly.askforleaveservice.entity.Leave;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/4/20
 * @QQ :1136513099
 * @desc :
 */
public interface LeaveService {
    //添加请假信息
    public void addLeaveInfo(Leave leave);


    //根据学号获得请假信息
    public Leave getLeaveInfo(String sId);


}
