package com.javahly.basicinfoservice.cache;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/11
 * @QQ :1136513099
 * @desc :
 */
public class RedisKey {

    /**
     * 所有教师信息 key
     */
    public static final String CLASSES_KEY = "info_classes_key";

    /**
     * 所有专业信息 key
     */
    public static final String SPECIALITIES_KEY = "info_specialities_key";

    /**
     * 所有学生信息 key
     */
    public static final String STUDENTS_KEY = "info_students_key";

    /**
     * 所有学生信息 key 放到 hash
     */
    public static final String STUDENTS_HASH_KEY = "info_students_hash_key";
    /**
     * 所有教师信息 key
     */
    public static final String TEACHERs_KEY = "info_teachers_key";

    /**
     * 1小时
     */
    public static final long EXPIRE_TIME = 3600L;

    /**
     * 1天
     */
    public static final long EXPIRE_ONE_DAY = 86400L;

    /**
     * 1 年
     */
    public static final long ACCOUNT_TYPE_EXPIRE_TIME = 2592000L;


}
