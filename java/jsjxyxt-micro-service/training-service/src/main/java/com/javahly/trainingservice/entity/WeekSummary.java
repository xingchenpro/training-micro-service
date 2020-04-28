package com.javahly.trainingservice.entity;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/2
 */
public class WeekSummary {

    private String sId;//学号
    private int wNum;//周数
    private String sName;//姓名
    private String summary;//本周总结
    private String advise;//工作建议
    private String arrange;//下周安排
    private String deal;//老师对问题的处理
    private String evaluation;//老师的评价
    private String isSubmit;//是否填写
    private String modifyTime;//修改的时间
    private List<WeekSummary> weekSummaries;

    public String getsId() {
        return sId;
    }

    public void setsId(String sId) {
        this.sId = sId;
    }

    public int getwNum() {
        return wNum;
    }

    public void setwNum(int wNum) {
        this.wNum = wNum;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getAdvise() {
        return advise;
    }

    public void setAdvise(String advise) {
        this.advise = advise;
    }

    public String getArrange() {
        return arrange;
    }

    public void setArrange(String arrange) {
        this.arrange = arrange;
    }

    public String getDeal() {
        return deal;
    }

    public void setDeal(String deal) {
        this.deal = deal;
    }

    public String getEvaluation() {
        return evaluation;
    }

    public void setEvaluation(String evaluation) {
        this.evaluation = evaluation;
    }

    public String getIsSubmit() {
        return isSubmit;
    }

    public void setIsSubmit(String isSubmit) {
        this.isSubmit = isSubmit;
    }

    public String getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(String modifyTime) {
        this.modifyTime = modifyTime;
    }

    public List<WeekSummary> getWeekSummaries() {
        return weekSummaries;
    }

    public void setWeekSummaries(List<WeekSummary> weekSummaries) {
        this.weekSummaries = weekSummaries;
    }
}
