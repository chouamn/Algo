package com.algotech.api.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

// In-memory sliding-window rate limiter, keyed by client IP.
// Adequate for a single-instance deployment behind a trusted proxy.
// For multi-replica prod, swap for Redis-backed Bucket4j.
@Component
public class RateLimitInterceptor implements HandlerInterceptor {

    private static final int MAX_REQUESTS = 5;
    private static final Duration WINDOW = Duration.ofMinutes(1);

    private final Map<String, Deque<Instant>> history = new ConcurrentHashMap<>();

    @Override
    public boolean preHandle(
        @NonNull HttpServletRequest request,
        @NonNull HttpServletResponse response,
        @NonNull Object handler
    ) throws Exception {
        String ip = clientIp(request);
        Instant now = Instant.now();
        Instant cutoff = now.minus(WINDOW);

        Deque<Instant> hits = history.computeIfAbsent(ip, k -> new ArrayDeque<>());
        synchronized (hits) {
            while (!hits.isEmpty() && hits.peekFirst().isBefore(cutoff)) {
                hits.pollFirst();
            }
            if (hits.size() >= MAX_REQUESTS) {
                response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
                response.setHeader("Retry-After", String.valueOf(WINDOW.getSeconds()));
                response.setContentType("application/json");
                response.getWriter().write(
                    "{\"ok\":false,\"error\":\"Too many requests. Try again shortly.\"}"
                );
                return false;
            }
            hits.addLast(now);
        }
        return true;
    }

    private String clientIp(HttpServletRequest request) {
        String fwd = request.getHeader("X-Forwarded-For");
        if (fwd != null && !fwd.isBlank()) {
            int comma = fwd.indexOf(',');
            return (comma == -1 ? fwd : fwd.substring(0, comma)).trim();
        }
        return request.getRemoteAddr();
    }
}
