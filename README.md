# Barranquilla Ahora

Proyecto full-stack para mostrar información en tiempo real del clima y noticias de Barranquilla.

## Estructura del Proyecto

- **backend/**  
  Aplicación de Express y TypeScript que sirve dos endpoints:
  - `/api/clima`: Consulta datos del clima usando la API de Meteosource.
  - `/api/noticias`: Consulta noticias sobre Barranquilla usando NewsAPI.
  
- **frontend/**  
  Aplicación de React creada con Create React App. Consume el endpoint `/api/clima` para mostrar la información del clima en Barranquilla.

## Requerimientos

- Node.js (versión 14 o superior)
- MongoDB (para la conexión del backend)

