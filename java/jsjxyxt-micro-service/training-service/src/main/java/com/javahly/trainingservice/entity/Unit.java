package com.javahly.trainingservice.entity;

import java.io.Serializable;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 */
public class Unit implements Serializable {

    private int uId;//单位编号
    private String uName;//单位名称
    private String uAddress;//单位地址
    private String uRemark;//备注
    private String uDetails;//单位详情
    private String uSId;
    private String uStatus;//已审核 未审核
    private String uReason;//否决原因

    public int getuId() {
        return uId;
    }

    public void setuId(int uId) {
        this.uId = uId;
    }

    public String getuName() {
        return uName;
    }

    public void setuName(String uName) {
        this.uName = uName;
    }

    public String getuAddress() {
        return uAddress;
    }

    public void setuAddress(String uAddress) {
        this.uAddress = uAddress;
    }

    public String getuRemark() {
        return uRemark;
    }

    public void setuRemark(String uRemark) {
        this.uRemark = uRemark;
    }

    public String getuDetails() {
        return uDetails;
    }

    public void setuDetails(String uDetails) {
        this.uDetails = uDetails;
    }

    public String getuSId() {
        return uSId;
    }

    public void setuSId(String uSId) {
        this.uSId = uSId;
    }

    public String getuStatus() {
        return uStatus;
    }

    public void setuStatus(String uStatus) {
        this.uStatus = uStatus;
    }

    public String getuReason() {
        return uReason;
    }

    public void setuReason(String uReason) {
        this.uReason = uReason;
    }
}
