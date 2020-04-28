package com.javahly.trainingservice.entity;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 */
public class TrainingSubject {

    private int id;
    private String sId;//
    private String title;//实训题目
    private String requirement;//(实训任务书)已知参数和实训要求
    private String contentAndStep;//(实训任务书)实训内容与步骤
    private String plan;//(实训任务书)实训计划与安排
    private String assessmentRequirement;//(实训任务书)实训考核要求
    private int status;//题目状态(已审核，未审核)
    private int  state;//校内/校外标记
    private String tutor;//指导教师
    private String specId;//专业编号
    private String reason;//拒绝理由

    //非数据库字段
    private String name;//学生姓名
    private String className;//班级

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRequirement() {
        return requirement;
    }

    public void setRequirement(String requirement) {
        this.requirement = requirement;
    }

    public String getContentAndStep() {
        return contentAndStep;
    }

    public void setContentAndStep(String contentAndStep) {
        this.contentAndStep = contentAndStep;
    }

    public String getPlan() {
        return plan;
    }

    public void setPlan(String plan) {
        this.plan = plan;
    }

    public String getAssessmentRequirement() {
        return assessmentRequirement;
    }

    public void setAssessmentRequirement(String assessmentRequirement) {
        this.assessmentRequirement = assessmentRequirement;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }


    public String getTutor() {
        return tutor;
    }

    public void setTutor(String tutor) {
        this.tutor = tutor;
    }

    public String getSpecId() {
        return specId;
    }

    public void setSpecId(String specId) {
        this.specId = specId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getsId() {
        return sId;
    }

    public void setsId(String sId) {
        this.sId = sId;
    }

    @Override
    public String toString() {
        return "TrainingSubject{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", sId='" + sId + '\'' +
                ", name='" + name + '\'' +
                ", requirement='" + requirement + '\'' +
                ", contentAndStep='" + contentAndStep + '\'' +
                ", plan='" + plan + '\'' +
                ", assessmentRequirement='" + assessmentRequirement + '\'' +
                ", status=" + status +
                ", state=" + state +
                ", tutor='" + tutor + '\'' +
                ", className='" + className + '\'' +
                ", specId='" + specId + '\'' +
                ", reason='" + reason + '\'' +
                '}';
    }
}
