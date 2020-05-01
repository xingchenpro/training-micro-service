package com.javahly.askforleaveservice.mq.service;

import com.alibaba.fastjson.JSONObject;
import com.javahly.askforleaveservice.feign.training.entity.TrainingSubject;
import org.apache.rocketmq.spring.core.RocketMQTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/4/29
 * @QQ :1136513099
 * @desc :
 */
@Service
public class TrainingSubjectMqService {

    @Autowired
    private RocketMQTemplate rocketMQTemplate;


    /**
     * 保存消息
     *
     * @param subject
     * @return
     */
    @Async
    public void save(TrainingSubject subject, int leStatus, int leId, String leBackReason) {
        //1、提前生成我们的半消息
        //2、半消息发送成功之后，在执行我们的本地事务
        String msg = JSONObject.toJSONString(subject);
        MessageBuilder<String> stringMessageBuilder = MessageBuilder.withPayload(msg);
        //3、封装了课题信息
        stringMessageBuilder.setHeader("msg", msg);
        Map<String,Object> param = new HashMap<>();
        param.put("leStatus",leStatus);
        param.put("leId", leId);
        param.put("leBackReason", leBackReason);
        Message message = stringMessageBuilder.build();
        //该消息不允许被消费者消费 TransactionProducer 需要和回调的方法一致。subjectTopic 为课题主题
        rocketMQTemplate.sendMessageInTransaction("TransactionProducer",
                "subjectTopic", message, param);

    }
}
