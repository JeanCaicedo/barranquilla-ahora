import React from 'react';
import { Box, Container, AppBar, Toolbar, Typography, useTheme } from '@mui/material';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Barranquilla Ahora
          </Typography>
        </Toolbar>
      </AppBar>

      <Container 
        component="main" 
        sx={{ 
          mt: 4, 
          mb: 4,
          flex: 1,
          backgroundColor: theme.palette.background.default
        }}
      >
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Barranquilla Ahora - Desarrollado con ❤️ para Barranquilla
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 