package com.javahly.basicinfoservice.service;

import com.javahly.basicinfoservice.entity.Class;

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
public interface ClassService {

    /**
     * 查询所有班级信息
     */
    public List<Class> getClasses();

}
