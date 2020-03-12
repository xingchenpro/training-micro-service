package com.javahly.askforleaveservice.util;


import lombok.Data;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @date :2020/3/2
 * @QQ :1136513099
 */
@Data
public class Result {

    private int resultCode;//结果代码 200成功 400错误的请求
    private String msg;//结果消息
    private Object result;//响应的json字符串

    public Result() {
        this.resultCode = 200;//默认调用成功
    }

    public Result(int code) {
        this.resultCode = code;
    }


    public Result(int resultCode, String msg) {
        super();
        this.resultCode = resultCode;
        this.msg = msg;
    }

    public Result(int resultCode, String msg, Object result) {
        super();
        this.resultCode = resultCode;
        this.msg = msg;
        this.result = result;
    }

    public void setErrInfos(int resultCode, String msg) {
        this.resultCode = resultCode;
        this.msg = msg;
    }

    public void setParaErrInfos() {
        this.resultCode = 400;
        this.msg = "请求参数校验失败！";
    }
}
