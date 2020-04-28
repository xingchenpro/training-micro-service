package com.javahly.trainingservice.dao;

import com.javahly.trainingservice.entity.TrainingSubject;
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
public interface TrainingSubjectDao {

    //学生获取自己的实训课题
    public TrainingSubject getTrainingSubject(@Param("sId") String sId);

    //学生提交课题
    public int addTrainingSubject(TrainingSubject trainingSubject);

    //学生更新实训课题
    public int updateTrainingSubject(TrainingSubject trainingSubject);

    //根据条件查询课题
    public List<TrainingSubject> getTrainingSubjects(Map<String, Object> map);

    //指导教师或专业负责人获得课题
    public List<TrainingSubject> getTrainingSubjectsByTeacherIdOrSpec(Map<String, Object> map);

    //指导教师或专业负责人审核课题
    public void updateTrainingSubjectStatus(Map<String, Object> map);

    //学生更新指导教师
    public int updateTeacher(Map<String, Object> map);

}
