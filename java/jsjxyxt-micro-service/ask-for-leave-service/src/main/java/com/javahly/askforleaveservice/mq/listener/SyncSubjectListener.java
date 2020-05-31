package com.javahly.askforleaveservice.mq.listener;

import com.alibaba.fastjson.JSONObject;
import com.javahly.askforleaveservice.service.LeaveService;
import com.javahly.askforleaveservice.util.TransationalUtils;
import lombok.extern.slf4j.Slf4j;
import org.apache.rocketmq.spring.annotation.RocketMQTransactionListener;
import org.apache.rocketmq.spring.core.RocketMQLocalTransactionListener;
import org.apache.rocketmq.spring.core.RocketMQLocalTransactionState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.stereotype.Component;
import org.springframework.transaction.TransactionStatus;

import java.util.Map;

@Slf4j
@Component
@RocketMQTransactionListener(txProducerGroup = "TransactionProducer")
public class SyncSubjectListener implements RocketMQLocalTransactionListener {

    @Autowired
    private TransationalUtils transationalUtils;

    @Autowired
    LeaveService leaveService;
    /**
     * 执行本地的事务
     */
    @Override
    public RocketMQLocalTransactionState executeLocalTransaction(Message msg, Object arg) {

        MessageHeaders headers = msg.getHeaders();
        Object object = headers.get("msg");
        if (object == null) {
            return null;
        }
        Map<String,Object> param = (Map<String, Object>) arg;
        TransactionStatus begin = null;
        try {
            begin = transationalUtils.begin();
            //执行本地事务
            Integer leStatus =null;
            Integer leId=null;
            String leBackReason=null;
            if(param.get("leStatus")!=null){
                 leStatus = Integer.valueOf(param.get("leStatus").toString());
            }
            if(param.get("leId")!=null){
                leId = Integer.valueOf(param.get("leId").toString());
            }
            if(param.get("leBackReason")!=null){
                leBackReason =param.get("leBackReason").toString();
            }
            int result = leaveService.updateExamineStatus(leStatus,leId ,leBackReason);
            //int i = 1/0;
            transationalUtils.commit(begin);
            if (result <= 0) {
                //执行失败
                return RocketMQLocalTransactionState.ROLLBACK;
            }
            // 告诉我们的 Broker 可以消费者该消息
            return RocketMQLocalTransactionState.COMMIT;
        } catch (Exception e) {
            log.error("SyncSubjectListener：{}",e);
            if (begin != null) {
                transationalUtils.rollback(begin);
                //手动回滚
                return RocketMQLocalTransactionState.ROLLBACK;
            }
        }
        return null;
    }

    /**
     * 提供给我们的 Broker 定时检查
     */
    @Override
    public RocketMQLocalTransactionState checkLocalTransaction(Message msg) {
        MessageHeaders headers = msg.getHeaders();
        Object object = headers.get("msg");
        if (object == null) {
            return RocketMQLocalTransactionState.ROLLBACK;
        }
     /*String orderMsg = (String) object;
        OrderEntity orderEntity = JSONObject.parseObject(orderMsg, OrderEntity.class);
        String orderId = orderEntity.getOrderId();
        // 直接查询我们的数据库
        OrderEntity orderDbEntity = orderMapper.findOrderId(orderId);
        if (orderDbEntity == null) {
            return RocketMQLocalTransactionState.UNKNOWN;
        }*/
        return RocketMQLocalTransactionState.COMMIT;
    }
}
