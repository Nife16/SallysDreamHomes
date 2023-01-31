package com.sdh.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.sdh.repo")
@EntityScan(basePackages="com.sdh.entity")
public class ApplicationConfig {
    
}
