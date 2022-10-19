import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import NewClient from './pages/NewClient'
import Client from './pages/Client'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,   //Es lo que se va a mostrar en pantalla
    children: [
      {
        index: true, //Avisa que va a cargar el layou en la vista principal
        element: <Inicio />
      },
      {
        path:'/clientes/nuevo',
        element: <NewClient />
      },
      {
        path:'/clientes',
        element: <Client />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>    
  </React.StrictMode>
)
