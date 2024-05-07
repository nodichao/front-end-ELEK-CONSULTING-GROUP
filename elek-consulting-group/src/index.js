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
            path:'/user/Blog',
            element:<Blog/>
          },
          {
            path:'/user/Canevas',
            element:<p>Page Canevas</p>
          },
          {
            path:'/user/RDV',
            element:<p>Page Rdvs</p>
          },
          {
            path:'/user/Parametres',
            element:<p>Page parametres</p>
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
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
