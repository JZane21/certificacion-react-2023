import React from 'react'
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

// esta creando rutas, y cuando no se encuentre en ninguna ruta,
// deberá redirigirnos a un layout
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
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
        element: <ClientsPage/>
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
