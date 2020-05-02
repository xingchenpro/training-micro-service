package com.javahly.trainingservice.service;

import com.javahly.trainingservice.entity.WeekSummary;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 */
public interface WeekSummaryService {

    //查询周总结信息
    public List<WeekSummary> getWeekSummaryInfoByStudentId(String sId);

    //查询所有周总结信息
    public List<List<WeekSummary>> getWeekSummariesInfoByStudentIds(List<String> studentIds);
    //更新周总结
    public int  updateWeekSummaryInfo(WeekSummary weekSummary);


}
