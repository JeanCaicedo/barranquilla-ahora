"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/noticias.ts
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = (0, express_1.Router)();
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
    }
    catch (error) {
        res.status(500).json({ error: 'Error al verificar la configuración' });
    }
});
// Endpoint principal para obtener noticias
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const apiKey = process.env.NEWS_API_KEY;
        if (!apiKey) {
            return res.status(400).json({ error: 'API key no configurada' });
        }
        const { data } = yield axios_1.default.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'Barranquilla',
                language: 'es',
                sortBy: 'publishedAt',
                apiKey: apiKey
            }
        });
        res.json(data);
    }
    catch (error) {
        res.status(500).json({
            error: 'Error al obtener noticias',
            details: ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message
        });
    }
}));
exports.default = router;
