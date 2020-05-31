package com.javahly.gatewayservice.filter;

import com.javahly.gatewayservice.util.SpringBeanUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;


import com.alibaba.fastjson.JSON;
import com.javahly.gatewayservice.util.Result;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.digest.DigestUtils;

import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.core.Ordered;
import org.springframework.core.io.buffer.DataBuffer;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ServerWebExchange;

import reactor.core.publisher.Mono;
import java.nio.charset.StandardCharsets;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/15
 * @QQ :1136513099
 * @desc : 定义全局过滤器
 */
//@Component
@Slf4j
public class TokenGlobalFilter implements GatewayFilter, Ordered {

    private static final String AUTHORIZE_TOKEN = "token";
    private static final String AUTHORIZE_USERNAME = "username";


    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        //无法注入，通过扩展点解决
        StringRedisTemplate redisTemplate = SpringBeanUtil.getBean(StringRedisTemplate.class);
        ServerHttpRequest request = exchange.getRequest();
        String token = request.getQueryParams().getFirst(AUTHORIZE_TOKEN);
        String id = DigestUtils.md5Hex(request.getQueryParams().getFirst(AUTHORIZE_USERNAME));
        log.info("id：{},token：{}", id, token);
        if (!StringUtils.isEmpty(id) && redisTemplate.hasKey(id)) {
            String existToken = redisTemplate.opsForValue().get(id);
            if (!StringUtils.isEmpty(existToken) && !StringUtils.isEmpty(token) && token.equals(existToken)) {
                log.info("网关校验成功");
                return chain.filter(exchange);
            }
        }
        log.info("网关校验失败");
        ServerHttpResponse response = exchange.getResponse();
        Result result = new Result(401);
        byte[] datas = JSON.toJSON(result).toString().getBytes(StandardCharsets.UTF_8);
        DataBuffer buffer = response.bufferFactory().wrap(datas);
        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        response.getHeaders().add("Content-Type", "application/json;charset=UTF-8");
        return response.writeWith(Mono.just(buffer));

    }

    @Override
    public int getOrder() {
        return 10;
    }
}
