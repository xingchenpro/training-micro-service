package com.javahly.trainingservice.controller;

import com.javahly.trainingservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;

@RestController
@Slf4j
public class UploadController {

    @Value("${filepath}")
    private String filepath;

    /**
     * 文件上传
     * @param sId 学号
     * @param file 文件
     * @return
     */
    @PostMapping("/upload/{sId}")
    public Result upload(@PathVariable("sId") String sId, @RequestParam("file") MultipartFile file) {
        Result result = new Result();
        if (file.isEmpty()) {
            return result;
        }
        File targetFile = new File(filepath);
        if (!targetFile.exists()) {
            targetFile.mkdirs();
        }
        //获得文件名
        String fileName = file.getOriginalFilename();
        //获得文件后缀
        String fileType = fileName.substring(fileName.lastIndexOf("."), fileName.length());
        try (FileOutputStream out = new FileOutputStream(filepath + sId + fileType)) {
            out.write(file.getBytes());
        } catch (Exception e) {
            e.printStackTrace();
            log.error("文件上传失败!");
            return result;
        }
        log.info("文件上传成功!");
        return result;
    }


    /**
     * 根据学号查文档地址
     * @param sId
     * @return
     */
    @GetMapping("/upload/address/{sId}")
    public Result uploadAddress(@PathVariable("sId") String sId) {
        Result result = new Result();

        return result;

    }



}

