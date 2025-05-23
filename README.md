# Barranquilla Ahora 🌅

Barranquilla Ahora es una aplicación web que proporciona información en tiempo real sobre el clima y noticias relevantes de la ciudad de Barranquilla, Colombia. El objetivo es ofrecer a los barranquilleros una plataforma centralizada y fácil de usar para mantenerse informados sobre las condiciones climáticas y acontecimientos importantes de la ciudad.

## 🚀 Características

- **Clima en Tiempo Real**: 
  - Temperatura actual
  - Pronóstico del día
  - Alertas meteorológicas
  - Sensación térmica
  - Humedad y viento

- **Noticias Locales**:
  - Últimas noticias de Barranquilla
  - Actualizaciones en tiempo real
  - Filtrado por categorías

## 🛠️ Tecnologías Utilizadas

### Frontend
- React.js con TypeScript
- Material-UI para la interfaz de usuario
- Axios para peticiones HTTP

### Backend
- Node.js con Express
- TypeScript
- APIs integradas:
  - OpenWeather API (datos climáticos)
  - NewsAPI (noticias)

## 📦 Estructura del Proyecto

```
barranquilla-ahora/
├── frontend/           # Aplicación React
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Servidor Express
│   ├── src/
│   │   ├── routes/
│   │   └── index.ts
│   └── package.json
└── package.json      # Scripts principales
```

## 🚀 Instalación y Uso

1. Clonar el repositorio:
```bash
git clone https://github.com/JeanCaicedo/barranquilla-ahora.git
cd barranquilla-ahora
```

2. Instalar dependencias:
```bash
npm run install:all
```

3. Configurar variables de entorno:
   - Crear archivo `.env` en la carpeta backend
   - Agregar las API keys necesarias:
```env
PORT=3002
OPENWEATHER_API_KEY=tu_api_key_aqui
NEWS_API_KEY=tu_api_key_aqui
```

4. Iniciar la aplicación:
```bash
npm run dev
```

La aplicación estará disponible en:
- Frontend: http://localhost:3001
- Backend: http://localhost:3002

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

- Jean Caicedo
- GitHub: [@JeanCaicedo](https://github.com/JeanCaicedo)

---
Hecho con ❤️ para Barranquilla 🌅

