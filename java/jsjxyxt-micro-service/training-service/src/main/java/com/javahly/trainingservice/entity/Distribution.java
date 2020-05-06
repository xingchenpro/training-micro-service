package com.javahly.trainingservice.entity;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/6
 * @QQ :1136513099
 * @desc :
 */
public class Distribution {

    private String tId;
    private List<String> students;

    public String gettId() {
        return tId;
    }

    public void settId(String tId) {
        this.tId = tId;
    }

    public List<String> getStudents() {
        return students;
    }

    public void setStudents(List<String> students) {
        this.students = students;
    }

    @Override
    public String toString() {
        return "Distribution{" +
                "tId='" + tId + '\'' +
                ", students=" + students +
                '}';
    }
}
