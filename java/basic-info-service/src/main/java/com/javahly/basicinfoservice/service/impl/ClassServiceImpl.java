package com.javahly.basicinfoservice.service.impl;

import com.javahly.basicinfoservice.dao.ClassDao;
import com.javahly.basicinfoservice.entity.Class;
import com.javahly.basicinfoservice.service.ClassService;
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
public class ClassServiceImpl implements ClassService {

    @Autowired
    ClassDao classDao;

    /**
     * 查询所有班级信息
     */
    @Override
    public List<Class> getClasses() {
        return classDao.getClasses();
    }
}
