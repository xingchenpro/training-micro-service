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

    public String gettId() {
        return tId;
    }

    public void settId(String tId) {
        this.tId = tId;
    }

    public String gettName() {
        return tName;
    }

    public void settName(String tName) {
        this.tName = tName;
    }

    public String gettSex() {
        return tSex;
    }

    public void settSex(String tSex) {
        this.tSex = tSex;
    }

    public String gettDept() {
        return tDept;
    }

    public void settDept(String tDept) {
        this.tDept = tDept;
    }

    public String gettPost() {
        return tPost;
    }

    public void settPost(String tPost) {
        this.tPost = tPost;
    }

    public String gettDegree() {
        return tDegree;
    }

    public void settDegree(String tDegree) {
        this.tDegree = tDegree;
    }

    public String gettStudy() {
        return tStudy;
    }

    public void settStudy(String tStudy) {
        this.tStudy = tStudy;
    }

    public String gettEmail() {
        return tEmail;
    }

    public void settEmail(String tEmail) {
        this.tEmail = tEmail;
    }

    public String gettPhone() {
        return tPhone;
    }

    public void settPhone(String tPhone) {
        this.tPhone = tPhone;
    }

    public String gettRemark() {
        return tRemark;
    }

    public void settRemark(String tRemark) {
        this.tRemark = tRemark;
    }
}
