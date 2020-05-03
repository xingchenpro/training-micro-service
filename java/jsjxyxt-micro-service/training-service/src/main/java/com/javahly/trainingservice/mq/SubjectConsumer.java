package com.javahly.trainingservice.mq;

import com.alibaba.fastjson.JSONObject;
import com.javahly.trainingservice.entity.TrainingSubject;
import com.javahly.trainingservice.service.TrainingSubjectService;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyContext;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.common.message.MessageExt;
import org.apache.rocketmq.spring.annotation.ConsumeMode;
import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.apache.rocketmq.spring.support.DefaultRocketMQListenerContainer;
import org.apache.rocketmq.spring.support.RocketMQListenerContainer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/4/29
 * @QQ :1136513099
 * @desc :
 */
@Slf4j
@Service
@RocketMQMessageListener(topic = "subjectTopic", consumerGroup = "TransactionConsumerGroup")
public class SubjectConsumer implements RocketMQListener<String> {

    @Autowired
    TrainingSubjectService trainingSubjectService;

    public static int a = 0;

    //消费传递的消息
    @SneakyThrows
    @Override
    public void onMessage(String msg) {
        //获得消息
        TrainingSubject subject = JSONObject.parseObject(msg, TrainingSubject.class);
        log.info("SubjectConsumer：Massage：{},Time：{}", subject, new Date());
        //插入实训表，判断存不存在
        TrainingSubject trainingSubject = trainingSubjectService.getTrainingSubject(subject.getsId());
        if (trainingSubject == null) {
           /*int i = 1 / a;*/
            trainingSubjectService.addTrainingSubject(subject);
        }
    }
}
