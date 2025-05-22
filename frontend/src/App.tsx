import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

interface ClimaData {
  temperature?: number;
  description?: string;
}

function App() {
  const [clima, setClima] = useState<ClimaData | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/clima')
      .then((response) => setClima(response.data))
      .catch((error) => console.error('Error al cargar el clima:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Clima en Barranquilla</h1>
        {clima ? (
          <div>
            <p>Temperatura: {clima.temperature}°C</p>
            <p>Descripción: {clima.description}</p>
          </div>
        ) : (
          <p>Cargando datos del clima...</p>
        )}
      </header>
    </div>
  );
}

export default App;
