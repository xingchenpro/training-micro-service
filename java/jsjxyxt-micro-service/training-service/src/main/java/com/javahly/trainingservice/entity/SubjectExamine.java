package com.javahly.trainingservice.entity;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/3
 * @QQ :1136513099
 * @desc :
 */
public class SubjectExamine {

    private String sId;//
    private int status;//题目状态(已审核，未审核)
    private String tutor;//专业负责人教师ID

    private String role;//角色
    private String reason;//拒绝理由
    private List<String> sIds;

    public String getsId() {
        return sId;
    }

    public void setsId(String sId) {
        this.sId = sId;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getTutor() {
        return tutor;
    }

    public void setTutor(String tutor) {
        this.tutor = tutor;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public List<String> getsIds() {
        return sIds;
    }

    public void setsIds(List<String> sIds) {
        this.sIds = sIds;
    }
}
