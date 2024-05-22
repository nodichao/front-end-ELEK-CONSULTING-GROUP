import "./Utilisateur.css";
import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, Navigate } from "react-router-dom";

export function Utilisateur() {
  //console.log(data);
  const [redirectToHome, setRedirectToHome] = useState(false);
  let user = localStorage.getItem("user");
  let userObject = JSON.parse(user);
  const [burger,setBurger] = useState(false);
  
  const handleBurger = () => {
    burger ? setBurger(false) : setBurger(true);
    console.log(burger);
  };

  //console.log(userObject);
  useEffect(() => {
    document.getElementById("navigation").style.display = "none";
  }, []);
  const location = useLocation();

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
      userObject = null;
      console.log(userObject);
      localStorage.clear();
      setRedirectToHome(true);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  if (redirectToHome) {
    document.getElementById("navigation").style.display = "block";
    return <Navigate to="/" />;
  }
  return (
    <>
      {userObject && (
        <div id="User" className="User">
          <header className="Uheader" id="Uheader"></header>
          <main className="Umain" id="Umain">
            <div id="Unav" className={burger?"noUnav":"Unav"}>
              <div className="Ulogo">
                <img src="/logo_ECG.png" alt="logo" />
              </div>
              <div className="Uname">
                <div className="Uprofile">
                  <img
                    src="../../../utilisateur.jpg"
                    alt="profile"
                    className="Ppicture"
                  />
                </div>
                <p>
                  {userObject.firstName} {userObject.lastName}
                </p>
              </div>
              <nav>
                <ul>
                  <Link
                    to="Blog"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li
                      className={
                        location.pathname === "/user/Blog" ? "active" : ""
                      }
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
                  <Link
                    to="RDV"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li
                      className={
                        location.pathname === "/user/RDV" ? "active" : ""
                      }
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
                  {/*<Link
                  to="Reunion"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li
                    className={
                      location.pathname === "/user/Reunion" ? "active" : ""
                    }
                  >
                    <img src="/parametres.png" alt="parametres" />
                    <span>Reunion</span>
                  </li>
                  </Link>*/}
                  <li onClick={logoutHandler}>
                    <img src="/deconnexion.png" alt="deconnexion" />
                    <span>Deconnexion</span>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="Ucontent" id="Ucontent">
              <div className="inUContent" id="inUContent">
                <div
                  className="burgerHandler"
                  style={{ textAlign:"right"}}
                >
                  <img src={burger?"/menu.png":"/close.png"} alt="click" onClick={handleBurger} style={{ width: "40px" }} />
                  
                </div>
                <Outlet></Outlet>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
