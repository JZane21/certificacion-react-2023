import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage';
import { getCharacters } from './services/charactersService';
import { CharactersPage } from './pages/CharactersPage';
import { App } from './App';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<LoginPage/>
//   },
//   {
//     path:'/character',
//     element:<CharactersPage/>,
//     loader:async () => {
//       return await getCharacters();
//     }
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
