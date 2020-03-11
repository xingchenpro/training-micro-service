package com.javahly.basicinfoservice;

import com.ctrip.framework.apollo.spring.annotation.EnableApolloConfig;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.javahly.basicinfoservice.dao")
@EnableApolloConfig
public class BasicInfoServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BasicInfoServiceApplication.class, args);
	}

}
