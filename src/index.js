import { createRoot } from 'react-dom/client'
import React from 'react';

import './styles.css'
import App from './App'
import Menua from './Menug'
import { ScreenDsip } from './Screendisp';
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Menua/>
        <ScreenDsip/>
    </React.StrictMode>
    
)
