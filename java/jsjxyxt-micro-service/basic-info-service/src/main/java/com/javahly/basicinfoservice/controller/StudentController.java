package com.javahly.basicinfoservice.controller;

import com.alibaba.fastjson.JSON;
import com.codingapi.txlcn.common.util.SpringUtils;
import com.javahly.basicinfoservice.cache.RedisKey;
import com.javahly.basicinfoservice.entity.Student;
import com.javahly.basicinfoservice.service.StudentService;
import com.javahly.basicinfoservice.util.RedisUtil;
import com.javahly.basicinfoservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.util.StringUtils;
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
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/students", method = RequestMethod.GET)
    public List<Student> getStudents() {
        Result result = new Result();
        List<Student> students = (List<Student>) redisTemplate.opsForValue().get(RedisKey.STUDENTS_KEY);
        if (!StringUtils.isEmpty(students)) {
            log.info("缓存获取数据：/students");
            return students;
        }
        students = studentService.getStudents();
        redisTemplate.opsForValue().set(RedisKey.STUDENTS_KEY, students, 7, TimeUnit.DAYS);
        log.info("数据库查询学生信息放入缓存：/students");
        result.setResult(students);
        return students;
    }

    /**
     * 查询所有学生信息，放到HashMap
     *
     * @return
     */
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/hash/students", method = RequestMethod.GET)
    public Map<String, Student> getHashStudents() {
        Result result = new Result();
        Map<String, Student> studentHash = (Map<String, Student>) redisTemplate.opsForValue().get(RedisKey.STUDENTS_HASH_KEY);
        if (!StringUtils.isEmpty(studentHash)) {
            log.info("缓存获取数据：/hash/students");
            return studentHash;
        }
        List<Student> students = studentService.getStudents();
        studentHash = new HashMap<>(1 << 16);
        //放到Hash里面
        for (int i = 0; i < students.size(); i++) {
            studentHash.put(students.get(i).getsId(), students.get(i));
        }
        redisTemplate.opsForValue().set(RedisKey.STUDENTS_HASH_KEY, studentHash, 7, TimeUnit.DAYS);
        log.info("数据库查询学生信息放入缓存：/hash/students");
        result.setResult(studentHash);
        return studentHash;
    }


    /**
     * 根据学号查询部分学生
     *
     * @return
     */
    @RequestMapping(value = "/part/students", method = RequestMethod.POST)
    public List<Student> getStudentByIds(@RequestBody List<String> studentIds) {
        log.info("StudentController：getStudentByIds：{}", studentIds);
        List<Student> students = studentService.getStudentByIds(studentIds);
        return students;
    }

    /**
     * 根据教师号查询班级再查询该班级学生
     *
     * @return
     */
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/class/students", method = RequestMethod.GET)
    public List<String> getStudentByTeacherClass(@RequestParam("tId") String tId) {

        List<String> students = (List<String>) redisTemplate.opsForValue().get(tId);
        if (!StringUtils.isEmpty(students)) {
            log.info("缓存获取数据：/class/students");
            return students;
        }
        students = studentService.getStudentByTeacherClass(tId);
        redisTemplate.opsForValue().set(tId, students, 7, TimeUnit.DAYS);
        log.info("数据库查询学生信息放入缓存：/class/students");
        return students;
    }


    /**
     * 根据学号获取单个学生信息
     */
    @RequestMapping(value = "/student", method = RequestMethod.GET)
    public Result getStudent(@RequestParam String sId) {
        Result result = new Result();
        Student student = (Student) redisTemplate.opsForValue().get(sId);
        if (!StringUtils.isEmpty(student)) {
            log.info("缓存获取数据：/student");
            result.setResult(student);
            return result;
        }
        student = studentService.getStudent(sId);
        redisTemplate.opsForValue().set(sId, student, 7, TimeUnit.DAYS);
        log.info("数据库查询学生信息放入缓存：/student");
        result.setResult(student);
        return result;
    }


    /**
     * 更新学生信息
     *
     * @param student
     * @return
     */
    @RequestMapping(value = "/student", method = RequestMethod.PUT)
    public Result updateStudent(@RequestBody Student student) {
        Result result = new Result();
        if (studentService.updateStudent(student) <= 0){
            result.setErrInfos(500, "修改失败");
            return result;
        }
        redisTemplate.delete(student.getsId());
        log.info("删除单个学生缓存：/student");
        return result;
    }
}
