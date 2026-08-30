import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"


createRoot(document.getElementById('root')).render( 
  // aca trae el contenedor de react y renderiza el componente App dentro de el
  <StrictMode> 
    <App />
  </StrictMode>,
)
