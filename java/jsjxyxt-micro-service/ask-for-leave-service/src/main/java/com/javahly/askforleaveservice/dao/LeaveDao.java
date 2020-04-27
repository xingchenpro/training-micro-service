package com.javahly.askforleaveservice.dao;

import com.javahly.askforleaveservice.entity.Leave;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2019/4/3
 */
@Repository
public interface LeaveDao {

    //添加请假信息
    public void addLeaveInfo(Leave leave);

    //根据学号获得请假信息
    public Leave getLeaveInfo(@Param("sId") String sId);

    //根据条件获得请假信息
    public List<Leave> getLeaves(@Param("leStatus") Integer leStatus, @Param("tId") String tId, @Param("specId") Integer specId);

    //获得已审核请假信息
    public List<Leave> getExaminedLeavesInfo(@Param("leStatus") Integer leStatus, @Param("tId") String tId, @Param("specId") Integer specId);

    //更新审核信息
    public int updateExamineStatus(@Param("leStatus") Integer leStatus, @Param("leId") Integer leId, @Param("leBackReason") String leBackReason);


    //更新请假信息
    public void updateLeaveInfo(Leave leave);

    //删除请假信息
    public void deleteLeaveInfo(Leave leave);

    //根据id获取请假信息
    public Leave getLeaveInfoByStudentId(String studentId);


}
