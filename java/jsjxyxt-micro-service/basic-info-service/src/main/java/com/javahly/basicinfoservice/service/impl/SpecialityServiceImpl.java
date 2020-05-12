package com.javahly.basicinfoservice.service.impl;

import com.javahly.basicinfoservice.dao.SpecialityDao;
import com.javahly.basicinfoservice.entity.Speciality;
import com.javahly.basicinfoservice.service.SpecialityService;
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
public class SpecialityServiceImpl implements SpecialityService {

    @Autowired
    SpecialityDao specialityDao;

    @Override
    public List<Speciality> getSpecialities() {
        return specialityDao.getSpecialities();
    }

    @Override
    public String getSpecialityIdByTeacherId(String tId) {
        return specialityDao.getSpecialityIdByTeacherId(tId);
    }

}
