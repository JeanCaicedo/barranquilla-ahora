import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainLayout from './components/Layout/MainLayout';
import WeatherCard from './components/Weather/WeatherCard';
import NewsCard from './components/News/NewsCard';

const API_URL = 'http://localhost:3002';

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [news, setNews] = useState<any[]>([]);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [newsLoading, setNewsLoading] = useState(true);
  const [weatherError, setWeatherError] = useState('');
  const [newsError, setNewsError] = useState('');

  useEffect(() => {
    // Obtener datos del clima
    fetch(`${API_URL}/api/clima`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setWeatherLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener el clima:', error);
        setWeatherError('Error al cargar los datos del clima');
        setWeatherLoading(false);
      });

    // Obtener noticias
    fetch(`${API_URL}/api/noticias`)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles || []);
        setNewsLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener noticias:', error);
        setNewsError('Error al cargar las noticias');
        setNewsLoading(false);
      });
  }, []);

  return (
    <MainLayout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <WeatherCard
            temperature={weather?.current?.temperature}
            humidity={weather?.current?.humidity}
            windSpeed={weather?.current?.wind_speed}
            description={weather?.current?.summary}
            loading={weatherLoading}
            error={weatherError}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Últimas Noticias
          </Typography>
          <NewsCard
            news={news}
            loading={newsLoading}
            error={newsError}
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default App;
