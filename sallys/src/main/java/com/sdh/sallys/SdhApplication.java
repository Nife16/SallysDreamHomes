package com.sdh.sallys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.sdh")
public class SdhApplication {

	public static void main(String[] args) {
		SpringApplication.run(SdhApplication.class, args);
	}

}
