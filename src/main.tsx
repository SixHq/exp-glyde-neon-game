
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' // Crucial: Imports global styles and Tailwind directives

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)