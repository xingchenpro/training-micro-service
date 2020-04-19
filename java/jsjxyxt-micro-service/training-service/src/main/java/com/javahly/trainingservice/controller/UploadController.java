package com.songguoliang.springboot.controller;

import com.javahly.trainingservice.util.Result;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;


@Controller
@Slf4j
public class UploadController {

    @PostMapping("/upload")
    @ResponseBody
    public Result upload(@RequestParam("file") MultipartFile file) {
        Result result = new Result();
        if (file.isEmpty()) {
            return result;
        }

        String fileName = file.getOriginalFilename();
        String filePath = "/Users/document/";
        File dest = new File(filePath + fileName);
        try {
            file.transferTo(dest);
            return result;
        } catch (IOException e) {
            log.error("上传失败");
            result.setErrInfos(500,"上传失败");
        }
        return result;
    }

}

