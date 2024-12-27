import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

const root = createRoot(document.getElementById('root'))
 
//Se puede crear una funcion para crear un boton y esto creara un componente
//este componente se puede mandar llamar desde cualquier pagina para reutilizar el componente
//los nombres debe de ser PascalCase


root.render(
  //El react.fragment es para agregar mas de 1 control al render de la App o pagina
 <App />
 
)