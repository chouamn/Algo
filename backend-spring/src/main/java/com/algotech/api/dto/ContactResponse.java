package com.algotech.api.dto;

import java.time.Instant;

public record ContactResponse(
    boolean ok,
    String id,
    Instant createdAt
) {}
