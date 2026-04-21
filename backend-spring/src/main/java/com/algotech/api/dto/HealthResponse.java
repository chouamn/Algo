package com.algotech.api.dto;

public record HealthResponse(
    boolean ok,
    boolean connected,
    Long latencyMs,
    String timestamp
) {}
