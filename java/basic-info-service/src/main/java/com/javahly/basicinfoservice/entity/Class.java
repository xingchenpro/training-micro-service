package com.javahly.basicinfoservice.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/11
 */
@Data
public class Class implements Serializable {

    private String cId;//班级编号
    private String cName;//班级名称
    private String specId;//专业编号
    private String tId;//教师编号
    private String startyear;//开学年份
    private String endyear;//毕业年份

}