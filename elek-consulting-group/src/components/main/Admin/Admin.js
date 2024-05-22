import { Outlet, Link, useLocation,Navigate } from "react-router-dom";
import "./Admin.css";
import { useEffect,useState } from "react";

export function Admin() {
  const [burger,setBurger] = useState(false);

  const handleBurger = () => {
    burger ? setBurger(false) : setBurger(true);
    console.log(burger);
  };

    const [redirectToHome, setRedirectToHome] = useState(false);
  let admin = localStorage.getItem('admin');
   let adminObject = JSON.parse(admin);
   
  useEffect(() => {
    document.getElementById("navigation").style.display = "none";
  }, []);

  const location = useLocation();

  const logoutHandler = async () => {
    try {
      const response = await fetch("https://front-end-elek-consulting-group.vercel.app/api/user_logout", {
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
      adminObject= null;
      console.log(adminObject);
      localStorage.clear();
      setRedirectToHome(true);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

   if(redirectToHome){
    document.getElementById("navigation").style.display = "block";
    return <Navigate to="/"/>
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
              <p>{adminObject.email}<br/><br/> Administateur</p>
            </div>
            <nav>
              <ul>
                <Link
                  to="GRDVs"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li
                    className={
                      location.pathname === "/admin/GRDVs" ? "active" : ""
                    }
                  >
                    <img src="/rdv.png" alt="accueil" />
                    <span>Liste des rendez-vous</span>
                  </li>
                </Link>
                <hr />
                <Link
                  to="Pro"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li
                    className={
                      location.pathname === "/admin/Pro" ? "active" : ""
                    }
                  >
                    <img src="/rdv.png" alt="accueil" />
                    <span>Gérer les Professionnels</span>
                  </li>
                </Link>
                <hr />
                <Link
                  to="Articles"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li
                    className={
                      location.pathname === "/admin/Articles" ? "active" : ""
                    }
                  >
                    <img src="/Blog.png" alt="articles" />
                    <span>Gérer les articles</span>
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
              {adminObject && <Outlet></Outlet>}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
