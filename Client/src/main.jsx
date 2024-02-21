import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{BrowserRouter} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import { UserProvider } from './context/UserContext.jsx'
import './i18n';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <UserProvider>
       <HelmetProvider>
        <App />
    </HelmetProvider>
    </UserProvider>
   
    
    </BrowserRouter>

  </React.StrictMode>,
)
