package com.javahly.askforleaveservice.service;

import com.javahly.askforleaveservice.entity.Leave;
import org.apache.ibatis.annotations.Param;

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

    //获得请假信息
    public List<Leave> getLeaves();

    //根据条件获得请假信息
    public List<Leave> getLeaves(Integer leStatus);


    //根据条件获得请假信息
    public List<Leave> getLeaves(Integer leStatus, String tId);

    //根据条件获得请假信息
    public List<Leave> getLeaves(Integer leStatus, Integer specId);


    //根据条件获得请假信息
    public List<Leave> getLeaves(Integer leStatus, String tId, Integer specId);


    //获得已审核请假信息
    public List<Leave> getExaminedLeavesInfo();

    //获得已审核请假信息
    public List<Leave> getExaminedLeavesInfo(Integer leStatus);

    //获得已审核请假信息
    public List<Leave> getExaminedLeavesInfo(Integer leStatus, String tId);

    //获得已审核请假信息
    public List<Leave> getExaminedLeavesInfo(Integer leStatus,Integer specId);

    //获得已审核请假信息
    public List<Leave> getExaminedLeavesInfo(Integer leStatus, String tId, Integer specId);

    //更新审核信息
    public int updateExamineStatus(Integer leStatus, Integer leId,  String leBackReason);


}
