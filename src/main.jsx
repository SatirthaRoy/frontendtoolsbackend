import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Add from './Add.jsx';
import Update from './Update.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/')
      },
      {
        path: '/add',
        element: <Add/>
      },
      {
        path: '/update/:id',
        element: <Update/>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
