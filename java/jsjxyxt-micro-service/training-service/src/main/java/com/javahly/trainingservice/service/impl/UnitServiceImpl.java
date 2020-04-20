package com.javahly.trainingservice.service.impl;

import com.javahly.trainingservice.dao.UnitDao;
import com.javahly.trainingservice.entity.Unit;
import com.javahly.trainingservice.service.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2019/5/2
 */
@Service
public class UnitServiceImpl implements UnitService {

    @Autowired
    UnitDao unitDao;

    @Override
    public List<Unit> getUnits(Map<String, Object> map) {
        return unitDao.getUnits(map);
    }


}
