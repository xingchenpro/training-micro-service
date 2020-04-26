package com.javahly.askforleaveservice.entity;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2019/4/3
 */
//请假申请
public class Leave {

    private int leId;//编号
    private String sId;//学号
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date leStartTime;//请假开始时间
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date leEndTime;//请假结束时间
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date leLeaveTime;//离校时间
    private int apId;//实训申请id
    private String lePhone;//学生联系电话
    private String leReason;//请假原因
    private String leStayPlace;//住宿位置
    private int leStatus;//请假状态
    private String leConfirmTime;//指导老师确认时间
    private String leThroughTime;//专业负责人通过时间
    private String leBackReason;//不批准原因

    //非数据库字段
    //姓名
    private String sNeme;
    //班级
    private String sClass;
    //实训信息
    private TrainingApply trainingApply;

    public String getsNeme() {
        return sNeme;
    }

    public void setsNeme(String sNeme) {
        this.sNeme = sNeme;
    }

    public String getsClass() {
        return sClass;
    }

    public void setsClass(String sClass) {
        this.sClass = sClass;
    }

    public TrainingApply getTrainingApply() {
        return trainingApply;
    }

    public void setTrainingApply(TrainingApply trainingApply) {
        this.trainingApply = trainingApply;
    }

    public int getLeId() {
        return leId;
    }

    public void setLeId(int leId) {
        this.leId = leId;
    }

    public String getsId() {
        return sId;
    }

    public void setsId(String sId) {
        this.sId = sId;
    }

    public Date getLeStartTime() {
        return leStartTime;
    }

    public void setLeStartTime(Date leStartTime) {
        this.leStartTime = leStartTime;
    }

    public Date getLeEndTime() {
        return leEndTime;
    }

    public void setLeEndTime(Date leEndTime) {
        this.leEndTime = leEndTime;
    }

    public Date getLeLeaveTime() {
        return leLeaveTime;
    }

    public void setLeLeaveTime(Date leLeaveTime) {
        this.leLeaveTime = leLeaveTime;
    }

    public int getApId() {
        return apId;
    }

    public void setApId(int apId) {
        this.apId = apId;
    }

    public String getLePhone() {
        return lePhone;
    }

    public void setLePhone(String lePhone) {
        this.lePhone = lePhone;
    }

    public String getLeReason() {
        return leReason;
    }

    public void setLeReason(String leReason) {
        this.leReason = leReason;
    }

    public String getLeStayPlace() {
        return leStayPlace;
    }

    public void setLeStayPlace(String leStayPlace) {
        this.leStayPlace = leStayPlace;
    }

    public int getLeStatus() {
        return leStatus;
    }

    public void setLeStatus(int leStatus) {
        this.leStatus = leStatus;
    }

    public String getLeConfirmTime() {
        return leConfirmTime;
    }

    public void setLeConfirmTime(String leConfirmTime) {
        this.leConfirmTime = leConfirmTime;
    }

    public String getLeThroughTime() {
        return leThroughTime;
    }

    public void setLeThroughTime(String leThroughTime) {
        this.leThroughTime = leThroughTime;
    }

    public String getLeBackReason() {
        return leBackReason;
    }

    public void setLeBackReason(String leBackReason) {
        this.leBackReason = leBackReason;
    }
}
