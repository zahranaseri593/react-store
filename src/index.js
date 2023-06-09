import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './utils/AuthContextProvider';
import { CartContextProvider } from './utils/CartContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </AuthContextProvider>
);

