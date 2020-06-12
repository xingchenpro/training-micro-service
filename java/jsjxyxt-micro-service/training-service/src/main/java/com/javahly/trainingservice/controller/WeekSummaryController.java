package com.javahly.trainingservice.controller;

import com.javahly.trainingservice.entity.WeekSummary;
import com.javahly.trainingservice.feign.basic.service.BasicInformationService;
import com.javahly.trainingservice.feign.leave.service.LeaveService;
import com.javahly.trainingservice.service.WeekSummaryService;
import com.javahly.trainingservice.util.Result;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2019/4/18
 */
@Slf4j
@RestController
public class WeekSummaryController {

    @Autowired
    WeekSummaryService weekSummaryService;

    @Autowired
    LeaveService leaveService;

    @Autowired
    BasicInformationService basicInformationService;

    //查询个人周总结
    @RequestMapping(value = "/weekSummary", method = RequestMethod.GET)
    public Result getWeekSummaryInfoByStudentId(String sId) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        List<WeekSummary> weekSummary = null;
        weekSummary = weekSummaryService.getWeekSummaryInfoByStudentId(sId);
        resultMap.put("weekSummary", weekSummary);
        result.setResult(resultMap);
        return result;
    }

    //提交(更新)周总结
    @RequestMapping(value = "/weekSummary", method = RequestMethod.POST)
    public Result updateWeekSummaryInfo(@RequestBody WeekSummary weekSummary) {
        Result result = new Result();
        weekSummary.setModifyTime(new Date());
        System.err.println(weekSummary);
        weekSummaryService.updateWeekSummaryInfo(weekSummary);
        return result;
    }

    //指导教师，班主任，查询周总结
    @RequestMapping(value = "/weekSummaries", method = RequestMethod.GET)
    public Result getWeekSummaryInfo(int role, String tId) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        //远程调用指导教师学生ID集合
        if (role == 3) {
            List<String> sIds = leaveService.getStudentIdsByTeacherId(tId);
            log.info("LeaveService：sIds：{}", sIds);
            if(!sIds.isEmpty()){
                List<List<WeekSummary>> weekSummaries = weekSummaryService.getWeekSummariesInfoByStudentIds(sIds);
                log.info("LeaveService：weekSummaries：{}", weekSummaries);
                resultMap.put("weekSummaries", weekSummaries);
            }else{
                resultMap.put("weekSummaries", null);
            }
            result.setResult(resultMap);
        } else if (role == 5) {
            List<String> sIds = basicInformationService.getStudentByTeacherClass(tId);
            log.info("LeaveService：sIds：{}", sIds);
            List<List<WeekSummary>> weekSummaries = weekSummaryService.getWeekSummariesInfoByStudentIds(sIds);
            log.info("LeaveService：weekSummaries：{}", weekSummaries);
            resultMap.put("weekSummaries", weekSummaries);
            result.setResult(resultMap);
        }
        return result;
    }
}
