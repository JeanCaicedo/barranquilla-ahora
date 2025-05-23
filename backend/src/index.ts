// src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import climaRoutes from './routes/clima';
import noticiasRoutes from './routes/noticias';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

// Configuración básica
app.use(cors());
app.use(express.json());

// Endpoint de bienvenida
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenido a la API de Barranquilla Ahora',
    env: {
      port: process.env.PORT || '3002 (default)',
      hasMeteoSourceKey: !!process.env.METEOSOURCE_API_KEY,
      hasNewsApiKey: !!process.env.NEWS_API_KEY
    }
  });
});

// Rutas del clima
app.use('/api/clima', climaRoutes);

// Rutas de noticias
app.use('/api/noticias', noticiasRoutes);

// Endpoint de prueba
app.get('/api/test', (req, res) => {
  res.json({ 
    status: 'success',
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
