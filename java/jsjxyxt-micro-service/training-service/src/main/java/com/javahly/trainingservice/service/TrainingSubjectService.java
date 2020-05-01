package com.javahly.trainingservice.service;

import com.javahly.trainingservice.entity.TrainingSubject;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 */
public interface TrainingSubjectService {

    //学生获取自己的实训课题
    public TrainingSubject getTrainingSubject(String sId);

    //学生提交课题
    public int addTrainingSubject(TrainingSubject trainingSubject);



}
