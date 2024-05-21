import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import "./EPro.css";

export function EPro() {
  const [redirectToHome, setRedirectToHome] = useState(false);
  let pro = localStorage.getItem("pro");
  let proObject = JSON.parse(pro);
  const [burger,setBurger] = useState(false);
  
  const handleBurger = () => {
    burger ? setBurger(false) : setBurger(true);
    console.log(burger);
  };

  const location = useLocation();

  useEffect(() => {
    document.getElementById("navigation").style.display = "none";
  }, []);

  const logoutHandler = async () => {
    try {
      const response = await fetch("https://elek-consulting-group-server-side.vercel.app/api/user_logout", {
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
      proObject = null;
      console.log(proObject);
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
                {proObject.firstName} {proObject.lastName}
                <br />
                <br /> Professionnel
              </p>
            </div>
            <nav>
              <ul>
                <Link
                  to="MRDVs"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li
                    className={
                      location.pathname === "/pro/MRDVs" ? "active" : ""
                    }
                  >
                    <img src="/rdv.png" alt="accueil" />
                    <span>Mes rendes-vous</span>
                  </li>
                </Link>
                <hr />
                <Link
                  to="MCanevas"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li
                    className={
                      location.pathname === "/pro/MCanevas" ? "active" : ""
                    }
                  >
                    <img src="/canevas.png" alt="canevas" />
                    <span>Envoyer un canevas</span>
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
            <div
                  className="burgerHandler"
                  style={{ textAlign:"right"}}
                >
                  <img src={burger?"/menu.png":"/close.png"} alt="click" onClick={handleBurger} style={{ width: "40px" }} />
                  
                </div>
              { <Outlet></Outlet>}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
