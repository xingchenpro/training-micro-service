package com.javahly.basicinfoservice.service;

import com.javahly.basicinfoservice.entity.Speciality;
import org.apache.ibatis.annotations.Param;

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
public interface SpecialityService {

    /**
     * 查询所有专业信息
     */
    List<Speciality> getSpecialities();

    /**
     * 根据教师号查询专业信息
     * @param tId
     * @return
     */
    String getSpecialityIdByTeacherId(String tId);
}
