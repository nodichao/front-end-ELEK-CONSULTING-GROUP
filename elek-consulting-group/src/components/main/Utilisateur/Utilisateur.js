//import { Footer } from "../../footer/Footer";
import "./Utilisateur.css";
//import {Blog} from './Blog/Blog';
import { useEffect, useState } from "react";
import { Outlet, Link, useLocation,Navigate, useParams } from "react-router-dom";
//import { useEffect, useState } from "react";
//import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";

export function Utilisateur() {
  
  
  //console.log(data);
  const [redirectToHome, setRedirectToHome] = useState(false);
  let user = localStorage.getItem('user');
   let userObject = JSON.parse(user);
   //console.log(userObject);
  useEffect(() => {
    document.getElementById("navigation").style.display = "none";
  }, []);
  const location = useLocation();
  //const data = location.state?.data;
  //console.log(data);
  //console.log(data);
  //const {id}= useParams();
  //console.log(document.cookie);
  
  //console.log(id);
  const logoutHandler = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user_logout", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        //throw new Error('La requête a échoué : ' + response.status);
        const err = await response.json();
        throw err;
      }

      console.log("La deconnexion a réussi !");
      
      const data = await response.json();
      console.log(data);
      userObject= null;
      console.log(userObject);
      localStorage.clear();
      setRedirectToHome(true);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  }
  

  if(redirectToHome){
    document.getElementById("navigation").style.display = "block";
    return <Navigate to="/"/>
  }
  return (
    <div id="User" className="User">
      <header className="Uheader" id="Uheader">
        <div className="profile">
          <div className="profile-picture">
            <img
              src="../../../profile.jpg"
              alt="profile"
              className="Ppicture"
            />
          </div>
          <div className="pastille"></div>
        </div>
      </header>
      <main className="Umain" id="Umain">
        <div id="Unav" className="Unav">
          <div className="Ulogo">
            <img src="/logo_ECG.png" alt="logo" />
          </div>
          <div className="Uname">
            <div className="Uprofile">
              <img
                src="../../../profile.jpg"
                alt="profile"
                className="Ppicture"
              />
            </div>
            <p>{userObject.firstName} {userObject.lastName}</p>
          </div>
          <nav>
            <ul>
              <li>
                <img src="/accueil.png" alt="accueil" />
                <span>Accueil</span>
              </li>
              <hr />
              <Link
                to="Blog"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li
                  className={location.pathname === "/user/Blog" ? "active" : ""}
                >
                  <img src="/blog.png" alt="accueil" />
                  <span>Blog</span>
                </li>
              </Link>
              <hr />
              <Link
                to="Canevas"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li
                  className={
                    location.pathname === "/user/Canevas" ? "active" : ""
                  }
                >
                  <img src="/canevas.png" alt="canevas" />
                  <span>Mes canevas</span>
                </li>
              </Link>
              <hr />
              <Link to="RDV" style={{ textDecoration: "none", color: "black" }}>
                <li
                  className={location.pathname === "/user/RDV" ? "active" : ""}
                >
                  <img src="/rdv.png" alt="rdv" />
                  <span>Mes rendez-vous</span>
                </li>
              </Link>
              <hr />
              <Link
                to="Parametres"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li
                  className={
                    location.pathname === "/user/Parametres" ? "active" : ""
                  }
                >
                  <img src="/parametres.png" alt="parametres" />
                  <span>Parametres</span>
                </li>
              </Link>
              <hr />
              <li onClick={logoutHandler}>
                <img src="/deconnexion.png" alt="deconnexion" />
                <span>Deconnexion</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Ucontent" id="Ucontent">
          <div className="inUContent" id="inUContent">
            { userObject &&
                 <Outlet></Outlet>
            }
           
          </div>
        </div>
      </main>
    </div>
  );
}
