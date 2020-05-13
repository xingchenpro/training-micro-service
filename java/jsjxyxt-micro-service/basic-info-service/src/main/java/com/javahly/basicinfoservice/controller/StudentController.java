package com.javahly.basicinfoservice.controller;

import com.javahly.basicinfoservice.cache.RedisKey;
import com.javahly.basicinfoservice.entity.Student;
import com.javahly.basicinfoservice.service.StudentService;
import com.javahly.basicinfoservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/3/11
 * @QQ :1136513099
 * @desc :
 */
@Slf4j
@RestController
public class StudentController {

    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    private StudentService studentService;

    /**
     * 获得所有学生信息集合
     */
    @RequestMapping(value = "/students", method = RequestMethod.GET)
    public List<Student> getStudents() {
        Result result = new Result();
        List<Student> students = studentService.getStudents();
        //redisTemplate.opsForValue().set(RedisKey.STUDENTS_KEY, students, 7, TimeUnit.DAYS);
        result.setResult(students);
        return students;
    }

    /**
     * 查询所有学生信息，放到HashMap
     * @return
     */
    @RequestMapping(value = "/hash/students", method = RequestMethod.GET)
    public Map<String,Student> getHashStudents() {
        Result result = new Result();
        List<Student> students = studentService.getStudents();
        Map<String,Student> studentHash = new HashMap<>(1<<16);
        //放到Hash里面
        for (int i = 0; i < students.size(); i++) {
            studentHash.put(students.get(i).getsId(),students.get(i));
        }
        //redisTemplate.opsForValue().set(RedisKey.STUDENTS_KEY, students, 7, TimeUnit.DAYS);
        result.setResult(studentHash);
        return studentHash;
    }


    /**
     * 根据学号查询部分学生
     *
     * @return
     */
    @RequestMapping(value = "/part/students",method = RequestMethod.POST)
    public List<Student> getStudentByIds(@RequestBody List<String> studentIds) {
        log.info("StudentController：getStudentByIds：{}",studentIds);
        List<Student> students = studentService.getStudentByIds(studentIds);
        return students;
    }

    /**
     * 根据教师号查询班级再查询该班级学生
     * @return
     */
    @RequestMapping(value = "/class/students",method = RequestMethod.GET)
    public List<String> getStudentByTeacherClass(@RequestParam("tId")String tId) {
        log.info("StudentController：getStudentByTeacherClass：{}",tId);
        List<String> students = studentService.getStudentByTeacherClass(tId);
        return students;
    }


    /**
     * 根据学号获取单个学生信息
     */
    @RequestMapping(value = "/student", method = RequestMethod.GET)
    public Result getStudent(@RequestParam String sId) {
        Result result = new Result();
        Student student = studentService.getStudent(sId);
        result.setResult(student);
        return result;
    }


    /**
     * 更新学生信息
     * @param student
     * @return
     */
    @RequestMapping(value = "/student", method = RequestMethod.PUT)
    public Result updateStudent(@RequestBody Student student) {
        Result result = new Result();
        if (studentService.updateStudent(student) <= 0)
            result.setErrInfos(500, "修改失败");
        return result;
    }

}
