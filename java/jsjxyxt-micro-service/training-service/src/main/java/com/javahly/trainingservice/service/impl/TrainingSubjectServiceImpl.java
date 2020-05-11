package com.javahly.trainingservice.service.impl;

import com.javahly.trainingservice.dao.TrainingSubjectDao;
import com.javahly.trainingservice.entity.TrainingSubject;
import com.javahly.trainingservice.service.TrainingSubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<TrainingSubject> getTrainingSubjects() {
        return trainingSubjectDao.getTrainingSubjects();
    }

    @Override
    public int addTrainingSubject(TrainingSubject trainingSubject) {
        return trainingSubjectDao.addTrainingSubject(trainingSubject);
    }

    @Override
    public int updateTrainingSubject(TrainingSubject trainingSubject) {
        return trainingSubjectDao.updateTrainingSubject(trainingSubject);
    }

    @Override
    public List<TrainingSubject> getTrainingSubjectsByTId(String tId) {
        return trainingSubjectDao.getTrainingSubjectsByTId(tId);
    }

    @Override
    public List<TrainingSubject> getTrainingSubjectsBySpecId(String specId) {
        return trainingSubjectDao.getTrainingSubjectsBySpecId(specId);
    }

    @Override
    public int updateTrainingSubjectStatus(String sId, Integer status, String reason) {
        return trainingSubjectDao.updateTrainingSubjectStatus(sId, status, reason);
    }

    @Override
    public int updateTrainingSubjectsStatus(List<String> sIds, Integer status, String reason) {
        return trainingSubjectDao.updateTrainingSubjectsStatus(sIds, status , reason);
    }

    @Override
    public int updateTeacher(String tId, List<String> students) {
        return trainingSubjectDao.updateTeacher(tId,students);
    }

}
