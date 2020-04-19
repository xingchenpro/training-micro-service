package com.javahly.trainingservice;

import com.ctrip.framework.apollo.spring.annotation.EnableApolloConfig;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@MapperScan("com.javahly.trainingservice.dao")
@EnableApolloConfig
@EnableEurekaClient
public class TrainingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrainingServiceApplication.class, args);
	}

}
