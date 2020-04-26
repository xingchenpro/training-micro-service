package com.javahly.askforleaveservice.util;

import com.javahly.askforleaveservice.entity.Leave;
import com.javahly.askforleaveservice.feign.basic.entity.Student;

import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/4/26
 * @QQ :1136513099
 * @desc :
 */
public class InfoUtil {

    //匹配请假信息与学生信息
    public static List<Leave> matchingStudentInfo(List<Leave> leaves, List<Student> students) {
        for (Leave leaf : leaves) {
            for (Student student : students) {
                if (leaf.getsId().equals(student.getsId())) {
                    leaf.setsNeme(student.getsName());
                    leaf.setsClass(student.getcId());
                }
            }
        }
        return leaves;
    }
}
