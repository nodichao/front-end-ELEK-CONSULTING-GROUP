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
import  {Admin}  from "./components/main/Admin/Admin";
import { Articles } from "./components/main/Admin/Articles/Articles";
import { GRDVs } from "./components/main/Admin/GRDVs/GRDVs";
import { Pro } from "./components/main/Admin/Pro/Pro";
import ProtectedRoute from "./components/ProtectedRoutes";
import { EPro } from "./components/main/EPro/EPro";
import { MRDVs } from "./components/main/EPro/MRDVs/MRDVs";
import { MCanevas } from "./components/main/EPro/MCanevas/MCanevas";



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

        element:<ProtectedRoute><Utilisateur/></ProtectedRoute>,
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
          },
         /* {
            path:'Reunion',
            element:<Reunion/>
          },*/
          {
            index: true, 
            element: <Navigate to="Blog" replace />
          }
        ]
      },{
        path:'/admin',
        element:<ProtectedRoute><Admin/></ProtectedRoute>,
        children:[
          {
            path:'Articles',
            element:<Articles/>
          }
          ,{
            path:'Pro',
            element:<Pro/>
          },{
            path:'GRDVs',
            element:<GRDVs/>
          },
          {
            index: true, 
            element: <Navigate to="GRDVs" replace />
          }
        ]
      },
      {
        path:'/pro',
        element:<ProtectedRoute><EPro/></ProtectedRoute>,
        children:[
          {
            path:'MRDVs',
            element:<MRDVs/>
          }
          ,{
            path:'MCanevas',
            element:<MCanevas/>
          },
          {
            index: true, 
            element: <Navigate to="MRDVs" replace />
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
