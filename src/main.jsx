import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './componets/Layout/Layout.jsx';
import Home from './componets/Home/Home.jsx';
import Login from './componets/Login/Login.jsx';
import Register from './componets/Register/Register.jsx';
import Header from './componets/Header/Header.jsx';
import RegisterRBC from './componets/RegisterRBC/RegisterRBC.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : "login",
        element : <Login></Login>
      },
      {
        path : "register",
        element : <Register></Register>
      },
      {
        path : 'register-rbc',
        element : <RegisterRBC></RegisterRBC>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
