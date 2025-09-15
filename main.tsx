import React from 'react'
import { createRoot } from 'react-dom/client'
import BuilderApp from './App'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BuilderApp />
  </React.StrictMode>
)
