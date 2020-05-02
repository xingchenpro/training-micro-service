package com.javahly.trainingservice.service.impl;

import com.javahly.trainingservice.dao.WeekSummaryDao;
import com.javahly.trainingservice.entity.WeekSummary;
import com.javahly.trainingservice.service.WeekSummaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 * @QQ :1136513099
 * @desc :
 */
@Service
public class WeekSummaryServiceImpl implements WeekSummaryService {

    @Autowired
    WeekSummaryDao weekSummaryDao;

    @Override
    public List<WeekSummary> getWeekSummaryInfoByStudentId(String sId) {
        return weekSummaryDao.getWeekSummaryInfoByStudentId(sId);
    }

    @Override
    public List<List<WeekSummary>> getWeekSummariesInfoByStudentIds(List<String> studentIds) {
        return weekSummaryDao.getWeekSummariesInfoByStudentIds(studentIds);
    }

    @Override
    public int updateWeekSummaryInfo(WeekSummary weekSummary) {
        return weekSummaryDao.updateWeekSummaryInfo(weekSummary);
    }
}
