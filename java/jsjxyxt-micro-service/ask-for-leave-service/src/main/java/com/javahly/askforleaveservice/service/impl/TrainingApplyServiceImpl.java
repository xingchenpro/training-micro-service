package com.javahly.askforleaveservice.service.impl;

import com.javahly.askforleaveservice.dao.TrainingApplyDao;
import com.javahly.askforleaveservice.entity.TrainingApply;
import com.javahly.askforleaveservice.service.TrainingApplyService;
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
public class TrainingApplyServiceImpl implements TrainingApplyService {

    @Autowired
    TrainingApplyDao trainingApplyDao;

    @Override
    public void addTrainingApplyInfo(TrainingApply trainingApply) {
        trainingApplyDao.addTrainingApplyInfo(trainingApply);
    }

    @Override
    public TrainingApply getTrainingApplyInfoById(Integer apId) {
        return trainingApplyDao.getTrainingApplyInfoById(apId);
    }

    @Override
    public List<String> getStudentIdsByTeacherId(String tId) {
        return trainingApplyDao.getStudentIdsByTeacherId(tId);
    }

    @Override
    public int updateTeacher(String tId, List<String> students) {
        return trainingApplyDao.updateTeacher(tId,students);
    }
}
