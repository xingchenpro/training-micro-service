package com.javahly.trainingservice.service.impl;

import com.javahly.trainingservice.dao.TrainingSubjectDao;
import com.javahly.trainingservice.entity.TrainingSubject;
import com.javahly.trainingservice.service.TrainingSubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/4/28
 * @QQ :1136513099
 * @desc :
 */
@Service
public class TrainingSubjectServiceImpl implements TrainingSubjectService {

    @Autowired
    TrainingSubjectDao trainingSubjectDao;

    @Override
    public TrainingSubject getTrainingSubject(String sId) {
        return trainingSubjectDao.getTrainingSubject(sId);
    }

    @Override
    public int addTrainingSubject(TrainingSubject trainingSubject) {
        return trainingSubjectDao.addTrainingSubject(trainingSubject);
    }
}
