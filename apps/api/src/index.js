const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const sampleGreenhouses = [
  {
    id: "gh-01",
    name: "Greenhouse Alpha",
    location: "Al Ain",
    zones: 4,
    status: "Operational"
  },
  {
    id: "gh-02",
    name: "Greenhouse Oasis",
    location: "Al Qassim",
    zones: 6,
    status: "Alert"
  }
];

const alerts = [
  {
    id: "alert-01",
    severity: "P0",
    zone: "A-3",
    summary: "Heat stress indicators",
    recommendation: "Inspect ventilation fans and shading in Zone A-3"
  },
  {
    id: "alert-02",
    severity: "P1",
    zone: "B-1",
    summary: "Humidity oscillation",
    recommendation: "Review RH setpoint changes and irrigation timing"
  }
];

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "adham-agritech-api" });
});

app.get("/api/greenhouses", (req, res) => {
  res.json({ data: sampleGreenhouses });
});

app.get("/api/alerts", (req, res) => {
  res.json({ data: alerts });
});

app.post("/api/telemetry", (req, res) => {
  const payload = req.body;
  res.status(201).json({
    status: "received",
    receivedAt: new Date().toISOString(),
    payload
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Adham AgriTech API running on ${port}`);
});
