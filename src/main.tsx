import { CssVarsProvider, extendTheme } from '@mui/joy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const githubTheme = extendTheme({
  fontFamily: {
    display: 'Figtree, sans-serif',
    body: 'Figtree, sans-serif',
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: 'var(--joy-palette-primary-plainColor)',
        },
        primary: {
          '500': '#f4d04e',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider theme={githubTheme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
