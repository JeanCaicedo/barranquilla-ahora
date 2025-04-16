// src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import climaRoutes from './routes/clima';
import noticiasRoutes from './routes/noticias';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({})); // Habilitar CORS para todas las rutas

app.use(cors({
  origin: 'http://localhost:3000'
})); // Habilitar CORS para el frontend en localhost:3000)

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

app.use(express.json());

// Endpoint de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido a Barranquilla Ahora');
});

// Rutas para clima y noticias
app.use('/api/clima', climaRoutes);
app.use('/api/noticias', noticiasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
