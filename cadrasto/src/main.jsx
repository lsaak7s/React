import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App, App1 } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App1/>
  </StrictMode>,
)
