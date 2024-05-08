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
import Register from './Register.jsx';
import Provider from './Provider.jsx';
import Private from './Private.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Private><Home/></Private>,
        loader: () => fetch('http://localhost:5000/', {credentials: 'include'})
      },
      {
        path: '/add',
        element: <Private><Add/></Private>
      },
      {
        path: '/update/:id',
        element: <Private><Update/></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
