package com.javahly.basicinfoservice.controller;

import com.javahly.basicinfoservice.config.SystemConfig;
import com.javahly.basicinfoservice.entity.Class;
import com.javahly.basicinfoservice.util.Result;
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
 * @date :2020/6/5
 * @QQ :1136513099
 * @desc :
 */
@RestController
public class SystemController {

    @Autowired
    SystemConfig systemConfig;

    /**
     * 获得系统参数
     * @return
     */
    @RequestMapping(value = "/system", method = RequestMethod.GET)
    public Result getSystemParam() {
        Result result = new Result();
        Map<String,Object> resultMap = new HashMap<>(1<<4);
        resultMap.put("week",systemConfig.week);
        result.setResult(resultMap);
        return result;
    }

}
