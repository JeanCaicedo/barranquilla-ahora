// src/routes/noticias.ts
import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'Barranquilla',
        apiKey: process.env.NEWS_API_KEY,
        language: 'es',
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener noticias' });
  }
});

export default router;
