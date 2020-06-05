package com.javahly.gatewayservice.config;

import com.javahly.gatewayservice.filter.TokenGlobalFilter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :http://www.javahly.com/
 * @CSDN :blog.csdn.net/Sirius_hly
 * @date :2020/5/15
 * @QQ :1136513099
 * @desc : 配置路由过滤器
 */
@Configuration
@Slf4j
public class GatewayRoutesConfiguration {
    /**
     * @param builder
     * @return
     */
    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder builder) {
        log.info("ServerGatewayFilter filtet........");
        return builder.routes()
                .route(r -> r.path("/basic-service/**")
                        .filters(f -> f.stripPrefix(1).filters(new TokenGlobalFilter()))
                        .uri("lb://basic-info-service"))
                .route(r -> r.path("/training-service/**")
                        .filters(f -> f.stripPrefix(1).filters(new TokenGlobalFilter()))
                        .uri("lb://training-service"))
                .route(r -> r.path("/leave-service/**")
                        .filters(f -> f.stripPrefix(1).filters(new TokenGlobalFilter()))
                        .uri("lb://ask-for-leave-service"))
                .build();
    }
}
