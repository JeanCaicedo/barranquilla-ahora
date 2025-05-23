// src/routes/noticias.ts
import { Router } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

// Endpoint de prueba para verificar la API key
router.get('/test', (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    res.json({
      status: 'success',
      message: 'Configuración de noticias',
      apiKeyExists: !!apiKey,
      apiKeyFirstChars: apiKey ? `${apiKey.substring(0, 4)}...` : 'No disponible'
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al verificar la configuración' });
  }
});

// Endpoint principal para obtener noticias
router.get('/', async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return res.status(400).json({ error: 'API key no configurada' });
    }

    const { data } = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'Barranquilla',
        language: 'es',
        sortBy: 'publishedAt',
        apiKey: apiKey
      }
    });
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ 
      error: 'Error al obtener noticias',
      details: error.response?.data || error.message
    });
  }
});

export default router;
