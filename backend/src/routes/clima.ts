// src/routes/clima.ts
import { Router } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

interface OpenWeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    description: string;
  }>;
}

// Cargar variables de entorno
const envPath = path.join(__dirname, '..', '..', '.env');
console.log('Buscando archivo .env en:', envPath);
dotenv.config({ path: envPath });

const router = Router();

// Endpoint de prueba para verificar la API key
router.get('/test', (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    res.json({
      status: 'success',
      message: 'Configuración del clima',
      apiKeyExists: !!apiKey,
      apiKeyFirstChars: apiKey ? `${apiKey.substring(0, 4)}...` : 'No disponible'
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al verificar la configuración' });
  }
});

// Endpoint principal para obtener el clima
router.get('/', async (req, res) => {
  try {
    console.log('Directorio actual:', __dirname);
    console.log('Variables de entorno disponibles:', Object.keys(process.env));
    console.log('OPENWEATHER_API_KEY presente:', !!process.env.OPENWEATHER_API_KEY);

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      return res.status(400).json({ 
        error: 'API key no configurada',
        debug: {
          currentDir: __dirname,
          envVars: Object.keys(process.env),
          envPath: envPath
        }
      });
    }

    const lat = "10.96854";
    const lon = "-74.78132";

    console.log('Realizando petición a OpenWeather con configuración:', {
      url: 'https://api.openweathermap.org/data/2.5/weather',
      params: {
        lat,
        lon,
        units: 'metric',
        lang: 'es'
      }
    });

    const { data } = await axios.get<OpenWeatherResponse>('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: apiKey,
        units: 'metric',
        lang: 'es'
      }
    });

    console.log('Respuesta de OpenWeather:', data);

    const weatherData = {
      current: {
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        wind_speed: Math.round(data.wind.speed * 3.6),
        summary: data.weather[0].description,
        feels_like: Math.round(data.main.feels_like)
      }
    };

    res.json(weatherData);
  } catch (error: any) {
    console.error('Error completo:', error);
    console.error('Configuración de la petición:', error.config);
    console.error('Respuesta del servidor:', error.response?.data);

    res.status(500).json({ 
      error: 'Error al obtener datos del clima',
      details: error.response?.data || error.message,
      config: error.config
    });
  }
});

export default router;
