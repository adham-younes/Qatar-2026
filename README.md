# Adham AgriTech Monorepo

A full-stack foundation for a general greenhouse management platform with bilingual UI and a ready-to-extend API layer.

## Structure

```
apps/
  web/   # Next.js frontend (bilingual landing + command center teaser)
  api/   # Express API service (sample greenhouse + alert endpoints)
```

## Getting Started

### Frontend

```bash
npm install
npm run dev:web
```

The web UI will be available at `http://localhost:3000`.

### Backend

```bash
npm install
npm run dev:api
```

The API will run at `http://localhost:4000`.

## API Endpoints

- `GET /health`
- `GET /api/greenhouses`
- `GET /api/alerts`
- `POST /api/telemetry`

## Notes

This repository is scaffolded for a pilot-ready GCC greenhouse operations platform. Extend the data models, persistence, and auth as needed.
