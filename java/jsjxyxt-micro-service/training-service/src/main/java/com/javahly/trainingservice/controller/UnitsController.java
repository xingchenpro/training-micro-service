package com.javahly.trainingservice.controller;
import com.javahly.trainingservice.entity.Unit;
import com.javahly.trainingservice.service.UnitService;
import com.javahly.trainingservice.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 */
@RestController
public class UnitsController {

    @Autowired
    UnitService unitService;

    //获得单位信息
    @RequestMapping(value = "/units", method = RequestMethod.GET)
    public List<Unit> getUnits() {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("uStatus", "1");
        List<Unit> units = unitService.getUnits(paramMap);
        return units;
    }

}
