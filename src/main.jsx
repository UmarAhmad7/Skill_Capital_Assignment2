import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Comp1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>,
)
