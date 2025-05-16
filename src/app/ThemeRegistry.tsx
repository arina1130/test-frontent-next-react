'use client';

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#ffffff',
      },
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#ffffff',
      },
      text: {
        primary: '#000000',
      },
    },
    typography: {
      fontFamily: 'Inter',
    },
  });
  

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
