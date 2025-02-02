import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './globalStyles.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/first-project-react">
      <App />
    </BrowserRouter>
  </StrictMode>,
);