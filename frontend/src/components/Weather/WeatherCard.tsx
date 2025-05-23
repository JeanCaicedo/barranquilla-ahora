import React from 'react';
import { Card, CardContent, Typography, Box, CircularProgress, Grid } from '@mui/material';
import { WbSunny, Opacity, Air } from '@mui/icons-material';

interface WeatherData {
  temperature?: number;
  humidity?: number;
  windSpeed?: number;
  description?: string;
  loading?: boolean;
  error?: string;
}

const WeatherCard: React.FC<WeatherData> = ({
  temperature,
  humidity,
  windSpeed,
  description,
  loading,
  error
}) => {
  if (loading) {
    return (
      <Card>
        <CardContent sx={{ textAlign: 'center', py: 5 }}>
          <CircularProgress />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent>
          <Typography color="error">{error}</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Clima en Barranquilla
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WbSunny sx={{ mr: 1 }} />
              <Typography variant="h4">
                {temperature}°C
              </Typography>
            </Box>
            <Typography variant="body1" color="textSecondary">
              {description}
            </Typography>
          </Grid>

          <Grid item xs={6} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Opacity sx={{ mr: 1 }} />
              <Typography>
                Humedad: {humidity}%
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Air sx={{ mr: 1 }} />
              <Typography>
                Viento: {windSpeed} km/h
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard; 