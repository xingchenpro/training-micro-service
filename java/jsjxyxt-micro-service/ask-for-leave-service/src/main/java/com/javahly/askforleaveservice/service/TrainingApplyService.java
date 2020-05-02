package com.javahly.askforleaveservice.service;

import com.javahly.askforleaveservice.entity.TrainingApply;

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
public interface TrainingApplyService {

    //添加实训申请
    public void addTrainingApplyInfo(TrainingApply trainingApply);

    //根据id获得记录
    public TrainingApply getTrainingApplyInfoById(Integer apId);

    //根据指导教师id查询学生
    public List<String> getStudentIdsByTeacherId(String tId);

}
