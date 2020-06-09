package com.javahly.basicinfoservice.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/6/5
 * @QQ :1136513099
 * @desc : 系统参数配置
 */
@Component
public class SystemConfig {

    @Value("${week}")
    public Integer week;
}
