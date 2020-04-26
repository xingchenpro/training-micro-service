package com.javahly.askforleaveservice.feign.basic.entity;

import java.io.Serializable;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/11
 */

public class Student implements Serializable {

    private String sId;//学号
    private String sName;//姓名
    private String sSex;//性别
    private String sIdentitycard;//身份证号
    private String sEmail;//邮箱
    private String sPhone;//电话
    private String sAddress;//地址
    private String sRemark;//备注
    private String cId;//班级
    private String specId;//专业


    public String getsId() {
        return sId;
    }

    public void setsId(String sId) {
        this.sId = sId;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public String getsSex() {
        return sSex;
    }

    public void setsSex(String sSex) {
        this.sSex = sSex;
    }

    public String getsIdentitycard() {
        return sIdentitycard;
    }

    public void setsIdentitycard(String sIdentitycard) {
        this.sIdentitycard = sIdentitycard;
    }

    public String getsEmail() {
        return sEmail;
    }

    public void setsEmail(String sEmail) {
        this.sEmail = sEmail;
    }

    public String getsPhone() {
        return sPhone;
    }

    public void setsPhone(String sPhone) {
        this.sPhone = sPhone;
    }

    public String getsAddress() {
        return sAddress;
    }

    public void setsAddress(String sAddress) {
        this.sAddress = sAddress;
    }

    public String getsRemark() {
        return sRemark;
    }

    public void setsRemark(String sRemark) {
        this.sRemark = sRemark;
    }

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getSpecId() {
        return specId;
    }

    public void setSpecId(String specId) {
        this.specId = specId;
    }

    @Override
    public String toString() {
        return "Student{" +
                "sId='" + sId + '\'' +
                ", sName='" + sName + '\'' +
                ", sSex='" + sSex + '\'' +
                ", sIdentitycard='" + sIdentitycard + '\'' +
                ", sEmail='" + sEmail + '\'' +
                ", sPhone='" + sPhone + '\'' +
                ", sAddress='" + sAddress + '\'' +
                ", sRemark='" + sRemark + '\'' +
                ", cId='" + cId + '\'' +
                ", specId='" + specId + '\'' +
                '}';
    }
}
