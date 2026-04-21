# syntax=docker/dockerfile:1.7
# Multi-stage Dockerfile for the Algotech frontend (React + Vite + TypeScript + Tailwind).
# Build targets:
#   dev   — Vite dev server with HMR, source bind-mounted from host
#   prod  — static assets baked with `vite build`, served by nginx

# ─── base ─────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS base
WORKDIR /app

# ─── deps ─────────────────────────────────────────────────────────────────────
FROM base AS deps
COPY package.json package-lock.json* ./
# `npm install` bootstraps without a lockfile; switch to `npm ci` once a
# package-lock.json is committed for deterministic builds.
RUN npm install

# ─── dev — Vite HMR server ────────────────────────────────────────────────────
FROM base AS dev
# Polling is required for reliable file-change detection across bind mounts
# (particularly on Windows / WSL2 / macOS hosts).
ENV CHOKIDAR_USEPOLLING=true
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 5173
CMD ["npx", "vite", "--host", "0.0.0.0", "--port", "5173"]

# ─── builder — produce dist/ ──────────────────────────────────────────────────
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ─── prod — nginx serving static build ────────────────────────────────────────
# Why nginx?  Vite's dev server is development-only (slow SSR, no compression,
# unsafe defaults). In production you serve the compiled dist/ as static files;
# nginx is the industry-standard choice — small footprint, HTTP/2, gzip, SPA
# fallback routing, predictable caching.
FROM nginx:1.27-alpine AS prod
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
