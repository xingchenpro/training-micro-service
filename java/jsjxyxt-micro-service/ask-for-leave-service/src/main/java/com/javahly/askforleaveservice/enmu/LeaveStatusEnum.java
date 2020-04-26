package com.javahly.askforleaveservice.enmu;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2019/4/9
 */
public enum LeaveStatusEnum {

    STATUS_ENUM1(2, 0),//辅导员
    STATUS_ENUM2(3, 1),//指导教师
    STATUS_ENUM3(4, 2);//专业负责人

    private int role;
    private int status;

    LeaveStatusEnum(int role, int status) {
        this.role = role;
        this.status = status;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public static int getStatus(int role) {
        for (LeaveStatusEnum e : LeaveStatusEnum.values()) {
            if (e.role == role)
                return e.status;
        }
        return 0;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public static void main(String[] args) {

        System.out.println(LeaveStatusEnum.getStatus(2));
    }
}
