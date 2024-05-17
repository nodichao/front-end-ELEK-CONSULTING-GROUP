import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./components/ErrorPage";
import { Connexion } from "./components/Connexion/Connexion";
import {Inscription} from'./components/Inscription/Inscription';
import { Main } from "./components/main/Main";
import { Utilisateur } from "./components/main/Utilisateur/Utilisateur";
import { Blog } from "./components/main/Utilisateur/Blog/Blog";
import { Parametres } from "./components/main/Utilisateur/Parametres/Parametres";
import { Canevas } from "./components/main/Utilisateur/Canevas/Canevas";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RDVs } from "./components/main/Utilisateur/RDVs/RDVs";




const router = createBrowserRouter([
  { 
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Main/>
      },{
        path:'/connexion',
        element:<Connexion/>
      },{
        path:'/inscription',
        element:<Inscription/>
      },{
        path:'/user',
        element:<Utilisateur/>,
        children:[
          {
            path:'Blog',
            element:<Blog/>
          },
          {
            path:'Canevas',
            element:<Canevas/>
          },
          {
            path:'RDV',
            element:<RDVs/>
          },
          {
            path:'Parametres',
            element:<Parametres/>
          },{
            path:'/user/*',
            element:<Navigate to='/user/Blog' replace/>
          }
        ]
      }
    ] 
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ToastContainer></ToastContainer>
    <RouterProvider router={router}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
