import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { LayoutPage } from './pages/LayoutPage';
import { DashBoardPage } from './pages/DashBoardPage';
import { ClientsPage } from './pages/ClientsPage';
import { ProductsPage } from './pages/ProductsPage';
import { getClients } from './services/clientsService';
import ClientInterface from './models/ClientInterface';
import { ErrorPage } from './pages/ErrorPage';
import { AddClientPage } from './pages/AddClientPage';

// esta creando rutas, y cuando no se encuentre en ninguna ruta,
// deberá redirigirnos a un layout

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/home",
    element: <LayoutPage/>,
    children: [
      {
        path: 'dashboard',
        element: <DashBoardPage/>
      },
      {
        path: 'clients',
        element: <ClientsPage
        />,
        errorElement: <ErrorPage/>,
        loader:async ():Promise<ClientInterface[]> => {
          return await getClients();
        }
      },
      {
        path: 'add_client',
        element: <AddClientPage
        />,
        errorElement: <ErrorPage/>
      },
      {
        path: 'products',
        element: <ProductsPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
