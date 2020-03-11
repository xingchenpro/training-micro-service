package com.javahly.askforleave.feign.user.entity;

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
public class Teacher implements Serializable {

    private String tId;//教职工号
    private String tName;//
    private String tSex;//
    private String tDept;//教研室
    private String tPost;//职称
    private String tDegree;//学位
    private String tStudy;//研究方向
    private String tEmail;//邮箱
    private String tPhone;//手机号
    private String tRemark;//备注

}
