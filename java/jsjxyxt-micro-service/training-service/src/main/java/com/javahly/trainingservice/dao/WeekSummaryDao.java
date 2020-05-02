package com.javahly.trainingservice.dao;

import com.javahly.trainingservice.entity.WeekSummary;
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
public interface WeekSummaryDao {

    //添加周总结信息
    public int addWeekSummaryInfo(WeekSummary weekSummary);

    //查询周总结信息
    public List<WeekSummary> getWeekSummaryInfoByStudentId(@Param("sId") String sId);

    //查询所有周总结信息
    public List<List<WeekSummary>> getWeekSummariesInfoByStudentIds(@Param("studentIds") List<String> studentIds);

    //批量添加周总结
    public void addWeekSummaries(List<WeekSummary> weekSummaries);

    //更新周总结
    public int  updateWeekSummaryInfo(WeekSummary weekSummary);

    //根据条件获取周总结
    public List<WeekSummary> getWeekSummaryInfo(Map<String, Object> map);

    //查询学生周总结完成数量情况
    public List<WeekSummary> getStudentWeekSummaryNumInfo(Map<String, Object> map);


}
