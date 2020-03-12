package com.javahly.basicinfoservice.service.impl;

import com.javahly.basicinfoservice.dao.TeacherDao;
import com.javahly.basicinfoservice.entity.Teacher;
import com.javahly.basicinfoservice.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    TeacherDao teacherDao;

    @Override
    public List<Teacher> getTeachers() {
        return teacherDao.getTeachers();
    }
}
