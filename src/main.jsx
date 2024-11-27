import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {browserRouter} from "react-dom"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
