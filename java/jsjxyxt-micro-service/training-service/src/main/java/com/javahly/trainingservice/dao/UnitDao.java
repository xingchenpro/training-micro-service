package com.javahly.trainingservice.dao;


import com.javahly.trainingservice.entity.Unit;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 */
@Repository
public interface UnitDao {

    //查询单位信息
    public List<Unit> getUnits(@Param("uStatus") Integer uStatus);

    //根据学号查询单位信息
    public Unit getUnit(String sno);

    //申请单位信息
    public int addUnit(Unit unit);

    //审核单位信息
    public int updateUnitStatus(Map<String, Object> map);

    //更新单位信息
    public int updateUnit(Unit unit);

    //删除单位信息
    public int deleteUnit(@Param("uId")Integer uId);

}
