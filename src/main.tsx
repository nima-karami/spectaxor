import { StrictMode } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { AppContextProvider } from './context/context-provider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </AppContextProvider>
  </StrictMode>
);
