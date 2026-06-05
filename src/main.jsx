import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import './assets/css/bootstrap.rtl.min.css';
import './assets/js/bootstrap.bundle.min.js'
createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
