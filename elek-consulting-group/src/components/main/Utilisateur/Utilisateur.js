//import { Footer } from "../../footer/Footer";
import "./Utilisateur.css";
//import {Blog} from './Blog/Blog';
import { useEffect } from "react";
import { Outlet,Link,useLocation } from "react-router-dom";
//import { useEffect, useState } from "react";
//import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";

export function Utilisateur() {
  useEffect(()=>{
   document.getElementById('navigation').style.display="none";
   
  },[])
  const location = useLocation();
  
  return (
    <div id="User" className="User">
      <header className="Uheader" id="Uheader">
        <div className="profile">
          <div className="profile-picture">
           <img src="../../../profile.jpg" alt="profile" className="Ppicture" />
          </div>
          <div className="pastille">
          </div>  
        </div>
        
      </header>
      <main className="Umain" id="Umain">
        <div id="Unav" className="Unav">
          <div className="Ulogo">
            <img src="/logo_ECG.png" alt="logo"  />
          </div>
          <div className="Uname">
            <div className="Uprofile"> 
                <img src="../../../profile.jpg" alt="profile" className="Ppicture"/>
            </div>
            <p>Joe NODICHAO</p>
          </div>
          <nav>
            <ul>
              <li><img src="/accueil.png" alt="accueil"/><span>Accueil</span></li>
              <hr/>
              <Link to='Blog' style={{textDecoration:'none',color:'black'}}><li className={location.pathname === '/user/Blog' ? 'active' : ''}><img src="/blog.png" alt="accueil"/><span>Blog</span></li></Link>
              <hr/>
              <Link to='Canevas' style={{textDecoration:'none',color:'black'}}><li className={location.pathname === '/user/Canevas' ? 'active' : ''}><img src="/canevas.png" alt="canevas"/><span>Mes canevas</span></li></Link>
              <hr/>
              <Link to='RDV' style={{textDecoration:'none',color:'black'}}><li className={location.pathname === '/user/RDV' ? 'active' : ''}><img src="/rdv.png" alt="rdv"/><span>Mes rendez-vous</span></li></Link>
              <hr/>
              <Link to='Parametres' style={{textDecoration:'none',color:'black'}}><li className={location.pathname === '/user/Parametres' ? 'active' : ''}><img src="/parametres.png" alt="parametres"/><span>Parametres</span></li></Link>
            </ul>
          </nav>
        </div>
        <div className="Ucontent" id="Ucontent">
          <div className="inUContent" id="inUContent">
                <Outlet></Outlet>
          </div>
        </div>
      </main>
    </div>
  );
}
