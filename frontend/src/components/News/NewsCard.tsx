import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Link, Box, CircularProgress } from '@mui/material';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

interface NewsCardProps {
  news: NewsItem[];
  loading?: boolean;
  error?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, loading, error }) => {
  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ p: 2 }}>
        {error}
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {news.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {item.urlToImage && (
              <CardMedia
                component="img"
                height="140"
                image={item.urlToImage}
                alt={item.title}
              />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
              <Box sx={{ mt: 'auto' }}>
                <Typography variant="caption" color="text.secondary" display="block">
                  {new Date(item.publishedAt).toLocaleDateString('es-CO')} - {item.source.name}
                </Typography>
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  Leer más
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsCard; 