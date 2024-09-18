import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './preflight.css'
import './index.css'
import App from './App.tsx'

{/* <StrictMode>
    <App />
  </StrictMode>, */}

createRoot(document.getElementById('root')!).render(
    <App />,
)
