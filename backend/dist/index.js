"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const clima_1 = __importDefault(require("./routes/clima"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Configuración básica
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Endpoint de bienvenida
app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a la API de Barranquilla Ahora',
        env: {
            port: process.env.PORT || '3000 (default)',
            hasMeteoSourceKey: !!process.env.METEOSOURCE_API_KEY
        }
    });
});
// Rutas del clima
app.use('/api/clima', clima_1.default);
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
