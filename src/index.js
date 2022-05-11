import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//context
import {ColorContextProvider} from "./store/ColorContextProvider"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
<ColorContextProvider>
<App />
</ColorContextProvider>
);

