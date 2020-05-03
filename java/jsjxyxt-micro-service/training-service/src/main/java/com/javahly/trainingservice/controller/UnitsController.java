package com.javahly.trainingservice.controller;

import com.javahly.trainingservice.entity.Unit;
import com.javahly.trainingservice.service.UnitService;
import com.javahly.trainingservice.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
        List<Unit> units = unitService.getUnits();
        return units;
    }


    //更新单位信息
    @RequestMapping(value = "unit", method = RequestMethod.PUT)
    public Result updateUnit(@RequestBody Unit unit) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        try {
            unitService.updateUnit(unit);
        } catch (Exception e) {
            result.setResultCode(500);
            return result;
        }
        List<Unit> units = unitService.getUnits();
        resultMap.put("units", units);
        result.setResult(resultMap);
        return result;
    }

    //添加单位信息
    @RequestMapping(value = "unit", method = RequestMethod.POST)
    public Result addUnit(@RequestBody Unit unit) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        try {
            unitService.addUnit(unit);
        } catch (Exception e) {
            result.setResultCode(500);
            return result;
        }
        List<Unit> units = unitService.getUnits();
        resultMap.put("units", units);
        result.setResult(resultMap);
        return result;
    }

    //删除单位信息
    @RequestMapping(value = "/unit/{uId}", method = RequestMethod.DELETE)
    public Result deleteUnit(@PathVariable Integer uId) {
        Result result = new Result();
        Map<String, Object> resultMap = new HashMap<>();
        try {
            unitService.deleteUnit(uId);
        } catch (Exception e) {
            result.setResultCode(500);
            return result;
        }
        List<Unit> units = unitService.getUnits();
        resultMap.put("units", units);
        result.setResult(resultMap);
        return result;
    }

}
