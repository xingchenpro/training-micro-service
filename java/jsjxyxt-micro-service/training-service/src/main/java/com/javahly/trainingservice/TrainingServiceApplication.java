package com.javahly.trainingservice;

import brave.sampler.Sampler;
import com.codingapi.txlcn.tc.config.EnableDistributedTransaction;
import com.ctrip.framework.apollo.spring.annotation.EnableApolloConfig;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
@MapperScan("com.javahly.trainingservice.dao")
@EnableApolloConfig
@EnableFeignClients
@EnableEurekaClient
//@EnableDistributedTransaction//分布式事务
public class TrainingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrainingServiceApplication.class, args);
	}

	@Bean
	public Sampler defaultSampler() {
		return Sampler.ALWAYS_SAMPLE;
	}

}
