import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import { store } from '../redux/store.js'

const root = createRoot(document.getElementById('app')); 
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    
);
