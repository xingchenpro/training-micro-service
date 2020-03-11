package com.javahly.basicinfoservice.dao;

import com.javahly.basicinfoservice.entity.Class;
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
public interface ClassDao {


    /**
     * 查询所有班级信息
     */
    public List<Class> getClasses();


}
