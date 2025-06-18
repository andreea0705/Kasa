// Point de demarage, il affiche <App /> dans #root
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // ➕ Ajout pour le routage
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ➕ Active la navigation */}
    <App />
    </BrowserRouter>
  </StrictMode>,
)
