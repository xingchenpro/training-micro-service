package com.javahly.askforleaveservice.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;

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
public class JsonListUtil {

    /**
     * List<T> 转 json
     */
    public static <T> String listToJson(List<T> ts) {
        return JSON.toJSONString(ts);
    }

    /**
     * json 转 List<T>
     */
    public static <T> List<T> jsonToList(String jsonString, Class<T> clazz) {
        List<T> list = (List<T>) JSONArray.parseArray(jsonString, clazz);
        return list;
    }
}
