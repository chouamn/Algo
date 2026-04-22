package com.algotech.api.controller;

import com.algotech.api.dto.HealthResponse;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("/api/v1")
public class HealthController {

    private static final Logger log = LoggerFactory.getLogger(HealthController.class);

    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping("/health")
    public ResponseEntity<HealthResponse> health() {
        long start = System.currentTimeMillis();
        try {
            entityManager.createNativeQuery("SELECT 1").getSingleResult();
            long latency = System.currentTimeMillis() - start;
            return ResponseEntity.ok(
                new HealthResponse(true, true, latency, Instant.now().toString())
            );
        } catch (Exception e) {
            log.error("Health check DB probe failed: {}", e.getMessage());
            return ResponseEntity
                .status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(new HealthResponse(false, false, null, Instant.now().toString()));
        }
    }
}
