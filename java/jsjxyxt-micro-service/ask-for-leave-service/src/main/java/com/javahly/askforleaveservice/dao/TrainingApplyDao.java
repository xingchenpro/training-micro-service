package com.javahly.askforleaveservice.dao;

import com.javahly.askforleaveservice.entity.TrainingApply;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2019/4/3
 */
@Repository
public interface TrainingApplyDao {

    //添加实训申请
    public void addTrainingApplyInfo(TrainingApply trainingApply);

    //删除实训申请
    public void deleteTrainingApplyInfo(TrainingApply trainingApply);

    //更新实训实训申请
    public void updateTrainingApplyInfo(TrainingApply trainingApply);

    //根据id获得记录
    public TrainingApply getTrainingApplyInfoById(String studentId);

    //根据条件查询学生的实训信息
    public List<TrainingApply> getTrainingInfo(Map<String, Object> map);

    //根据学生id查询指导教师Id
    public String getTeacherIdByStudentId(String s_id);

    //根据指导教师id查询学生
    public List<String> getStudentIdsByTeacherId(String s_id);

    //实训单位情况，一个公司几个学生，根据单位id获得学生
    public List<String> getStudentsIdByUnitId(Map<String, Object> map);

    //更新指导教师
    public int updateTeacher(Map<String, Object> map);

}
