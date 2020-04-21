package com.javahly.askforleaveservice.service.impl;

import com.javahly.askforleaveservice.dao.LeaveDao;
import com.javahly.askforleaveservice.entity.Leave;
import com.javahly.askforleaveservice.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
@Service
public class LeaveServiceImpl implements LeaveService {

    @Autowired
    LeaveDao leaveDao;

    @Override
    public void addLeaveInfo(Leave leave) {
        leaveDao.addLeaveInfo(leave);
    }

    @Override
    public Leave getLeaveInfo(String sId) {
        return leaveDao.getLeaveInfo(sId);
    }

}
