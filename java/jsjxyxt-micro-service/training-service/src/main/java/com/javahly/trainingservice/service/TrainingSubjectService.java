package com.javahly.trainingservice.service;

import com.javahly.trainingservice.entity.TrainingSubject;
import org.apache.ibatis.annotations.Param;

import java.util.List;

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

    //获得所有课题
    public List<TrainingSubject> getTrainingSubjects();

    //学生提交课题
    public int addTrainingSubject(TrainingSubject trainingSubject);

    //学生更新实训课题
    public int updateTrainingSubject(TrainingSubject trainingSubject);

    //根据条件查询课题
    public List<TrainingSubject> getTrainingSubjectsByTId(String tId);

    //根据条件查询课题
    public List<TrainingSubject> getTrainingSubjectsBySpecId(String specId);

    //指导教师审核课题
    public int updateTrainingSubjectStatus(String sId,Integer status ,String reason);

    //专业负责人审核课题
    public int updateTrainingSubjectsStatus(List<String> sIds,Integer status ,String reason);

    //学生更新指导教师
    public int updateTeacher(String tId,List<String> students);

}
