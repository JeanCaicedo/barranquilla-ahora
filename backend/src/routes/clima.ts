// src/routes/clima.ts
import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.meteosource.com/v1/rest/current', {
      params: {
        places: 'Barranquilla',
        key: process.env.METEOSOURCE_API_KEY,
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos del clima' });
  }
});

export default router;
