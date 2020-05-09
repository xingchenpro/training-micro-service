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

    //获得所有课题
    public List<TrainingSubject> getTrainingSubjects();

    //学生提交课题
    public int addTrainingSubject(TrainingSubject trainingSubject);

    //学生更新实训课题
    public int updateTrainingSubject(TrainingSubject trainingSubject);

    //根据条件查询课题
    public List<TrainingSubject> getTrainingSubjectsByTId(@Param("tId") String tId);

    //根据条件查询课题
    public List<TrainingSubject> getTrainingSubjectsBySpecId(@Param("specId") String specId);

    //指导教师或专业负责人审核课题
    public int updateTrainingSubjectStatus(@Param("sId") String sId,@Param("status") Integer status ,@Param("reason") String reason);

    //学生更新指导教师
    public int updateTeacher(@Param("tId") String tId,@Param("students") List<String> students);

}
