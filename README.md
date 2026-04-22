# Algotech Solutions

Full-stack marketing site with an inquiry form, backed by a versioned REST API.

- **Frontend** — React 18 + Vite + TypeScript + Tailwind (Radix / MUI)
- **Backend** — Spring Boot 3 (Java 17), Spring Data JPA, Hibernate
- **Database** — MySQL 8 in production, H2 in-memory for local dev
- **Email** — SendGrid (async, non-blocking)

---

## Repository layout

```
ALGO/
├── frontend/              React + Vite app
│   ├── src/
│   ├── index.html
│   ├── vite.config.ts
│   ├── package.json
│   └── .env.example
│
├── backend-spring/        Spring Boot REST API
│   ├── src/main/java/com/algotech/api/
│   │   ├── config/        CORS + rate limiting
│   │   ├── controller/    REST endpoints + global exception handler
│   │   ├── dto/           Request / response records
│   │   ├── entity/        JPA entities
│   │   ├── repository/    Spring Data repositories
│   │   └── service/       Business logic (ContactService, EmailService)
│   ├── src/main/resources/
│   │   ├── application.properties        (prod — MySQL)
│   │   └── application-dev.properties    (dev — H2 in-memory)
│   ├── pom.xml
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## Architecture

```
Browser ──HTTPS──▶ Frontend (static build on CDN)
                       │
                       │ fetch(VITE_API_URL + "/api/v1/…")
                       ▼
                   Spring Boot (REST API, port 8080)
                   │        │        │
                   │        │        └──▶ SendGrid  (async, fire-and-log)
                   │        │
                   │        └──▶ MySQL  (JPA / Hibernate, pooled via HikariCP)
                   │
                   └──▶ RateLimitInterceptor (IP-based, /api/v1/contact)
```

### API

| Method | Path | Description | Success | Failure |
|---|---|---|---|---|
| `POST` | `/api/v1/contact` | Submit an inquiry | `201` + `{ok, id, createdAt}` | `400` validation · `429` rate limited · `500` |
| `GET`  | `/api/v1/health`  | DB liveness probe | `200` + `{ok:true, connected:true, latencyMs}` | `503` if DB unreachable |

Request body for `/api/v1/contact`:

```json
{ "name": "Jane Doe", "email": "jane@example.com", "message": "Hi there" }
```

---

## Local development

### Prerequisites

- Java 17+
- Maven 3.8+
- Node.js 20+
- npm 9+

### Backend

```bash
cd backend-spring
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

Starts on `http://localhost:8080` with H2 in-memory DB. No external services required. H2 console at `http://localhost:8080/h2-console` (JDBC URL `jdbc:h2:mem:algotech`, user `sa`, empty password).

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Starts on `http://localhost:5173`. Reads `VITE_API_URL` from `frontend/.env.local`.

---

## Environment variables

### Frontend — `frontend/.env.local`

| Variable | Example | Required |
|---|---|---|
| `VITE_API_URL` | `http://localhost:8080` | yes |

### Backend — `backend-spring/.env` (or host-level env vars)

| Variable | Example | Required |
|---|---|---|
| `DATABASE_URL` | `jdbc:mysql://host:3306/algotech?serverTimezone=UTC&useSSL=true` | prod |
| `DATABASE_USERNAME` | `algotech` | prod |
| `DATABASE_PASSWORD` | `********` | prod |
| `SENDGRID_API_KEY` | `SG.xxxx` | yes |
| `SENDGRID_FROM_EMAIL` | `noreply@algotechfed.com` | yes |
| `ADMIN_EMAIL` | `chouaib.gherbi@algotechfed.com` | yes |
| `FRONTEND_ORIGIN` | `https://algotechfed.com` | yes |
| `PORT` | `8080` | no |

The dev profile (`-Dspring-boot.run.profiles=dev`) provides sensible defaults for all of these — use it for local-only smoke tests.

---

## Production build

### Backend JAR

```bash
cd backend-spring
mvn clean package
java -jar target/algotech-api-0.0.1-SNAPSHOT.jar
```

Deploy the JAR to any Java 17+ runtime (AWS Elastic Beanstalk, ECS/Fargate, Railway, Render, Cloud Run, bare EC2). Point env vars at a managed MySQL (RDS, Cloud SQL, Azure Database).

### Frontend static site

```bash
cd frontend
npm run build
```

Outputs `frontend/dist/`. Deploy to any static host (Netlify, Vercel, S3 + CloudFront, Cloudflare Pages). Set `VITE_API_URL` to the deployed backend's public URL at build time.

---

## Security posture

- **Input validation** — Jakarta Bean Validation on DTOs (`@Valid`, `@NotBlank`, `@Email`)
- **Error handling** — Centralized via `@RestControllerAdvice` (validation → 400, generic → 500, no stack traces leaked)
- **Rate limiting** — IP-based sliding window on `/api/v1/contact` (5 req/min), returns `429 Too Many Requests`
- **CORS** — Whitelist-only, driven by `FRONTEND_ORIGIN` env var
- **SQL injection** — Eliminated by JPA parameterized queries
- **Email** — Async and self-catching; SendGrid outages never cause 5xx on the inquiry endpoint
- **Secrets** — `.env` files are gitignored; production values come from host env

---

## Stopping local services

Both services run in the foreground of their respective terminals. `Ctrl+C` to stop.
