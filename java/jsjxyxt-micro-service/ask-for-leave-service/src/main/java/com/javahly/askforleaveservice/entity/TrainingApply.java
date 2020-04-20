package com.javahly.askforleaveservice.entity;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2019/4/3
 */
//实训申请
public class TrainingApply {

    private int apId;//编号
    private String sId;//学号
    private String apName;//实习题目
    private String apReason;//实习理由
    private String apCompany;//实习公司
    private String apPlace;//实习地点
    private String apTeaName;//协作指导老师名称
    private String apTeaTitle;//协作指导老师职位
    private String apTeaPhone;//协作指导老师电话
    private String tId;//校内指导老师
    private String specId;//校内指导老师
    private int ifGraduate;//是否考研
    private int uId;//单位id

    public int getApId() {
        return apId;
    }

    public void setApId(int apId) {
        this.apId = apId;
    }

    public String getsId() {
        return sId;
    }

    public void setsId(String sId) {
        this.sId = sId;
    }

    public String getApName() {
        return apName;
    }

    public void setApName(String apName) {
        this.apName = apName;
    }

    public String getApReason() {
        return apReason;
    }

    public void setApReason(String apReason) {
        this.apReason = apReason;
    }

    public String getApCompany() {
        return apCompany;
    }

    public void setApCompany(String apCompany) {
        this.apCompany = apCompany;
    }

    public String getApPlace() {
        return apPlace;
    }

    public void setApPlace(String apPlace) {
        this.apPlace = apPlace;
    }

    public String getApTeaName() {
        return apTeaName;
    }

    public void setApTeaName(String apTeaName) {
        this.apTeaName = apTeaName;
    }

    public String getApTeaTitle() {
        return apTeaTitle;
    }

    public void setApTeaTitle(String apTeaTitle) {
        this.apTeaTitle = apTeaTitle;
    }

    public String getApTeaPhone() {
        return apTeaPhone;
    }

    public void setApTeaPhone(String apTeaPhone) {
        this.apTeaPhone = apTeaPhone;
    }

    public String gettId() {
        return tId;
    }

    public void settId(String tId) {
        this.tId = tId;
    }

    public String getSpecId() {
        return specId;
    }

    public void setSpecId(String specId) {
        this.specId = specId;
    }

    public int getIfGraduate() {
        return ifGraduate;
    }

    public void setIfGraduate(int ifGraduate) {
        this.ifGraduate = ifGraduate;
    }

    public int getuId() {
        return uId;
    }

    public void setuId(int uId) {
        this.uId = uId;
    }
}
