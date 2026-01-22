import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'adham-agritech-api' });
});

app.get('/api/overview', (_req, res) => {
  res.json({
    siteCount: 3,
    greenhouseCount: 8,
    activeZones: 24,
    openAlerts: 7,
    focusAreas: [
      'Irrigation consistency',
      'Heat stress prevention',
      'Energy optimization'
    ]
  });
});

app.post('/api/intake', (req, res) => {
  const payload = req.body ?? {};
  res.status(202).json({
    message: 'Payload received for normalization.',
    receivedAt: new Date().toISOString(),
    payloadSummary: {
      siteId: payload.site_id ?? null,
      greenhouseId: payload.greenhouse_id ?? null,
      zoneId: payload.zone_id ?? null
    }
  });
});

const port = Number(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`Adham AgriTech API listening on port ${port}`);
});
