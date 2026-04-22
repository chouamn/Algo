package com.algotech.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class AlgotechApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(AlgotechApiApplication.class, args);
    }
}
