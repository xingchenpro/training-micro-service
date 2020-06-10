package com.javahly.basicinfoservice.util;

import com.javahly.basicinfoservice.cache.RedisKey;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.concurrent.TimeUnit;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/11
 * @QQ :1136513099
 * @desc :
 */
@Component
public class RedisUtil {

    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    public void setObject(String key, Object value, Long timeOut) {
        redisTemplate.opsForValue().set(key, value);
        if (timeOut != null) {
            redisTemplate.expire(key, timeOut, TimeUnit.SECONDS);
        }
    }

    public void setObject(String key, Object value) {
        setObject(key, value, RedisKey.EXPIRE_ONE_DAY);
    }

    public Object getObject(String key) {
        return redisTemplate.opsForValue().get(key);
    }
}
