import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Importing BrowserRouter from react-router-dom
import './index.css' // 
import App from './App.jsx' // Grabs App component and render it in main.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* 2. Wrap your entire App */}
    <App />
    </BrowserRouter>
  </StrictMode>,
)
