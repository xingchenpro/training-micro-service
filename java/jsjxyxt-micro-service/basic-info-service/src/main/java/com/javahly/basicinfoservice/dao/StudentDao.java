package com.javahly.basicinfoservice.dao;

import com.javahly.basicinfoservice.entity.Student;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/11
 * @QQ :1136513099
 * @desc :
 */
@Repository
public interface StudentDao {

    /**
     * 查询所有学生信息
     */
    public List<Student> getStudents();

    /**
     * 根据学号查询单个学生信息
     */
    public Student getStudent(@Param("sId") String sId);

    /**
     * 修改学生信息
     */
    public int updateStudent(Student student);

}
