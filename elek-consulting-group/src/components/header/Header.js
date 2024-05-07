import { Link } from "react-router-dom";
import "./header.css";
export function Header() {
  return (
    <>
      <nav id="navigation" className="navigation">
        <div id="logo" className="logoBlock nav1">
          <img src="/logo_ECG.png" alt="logo" className="logo" />
        </div>
        <div id="menu" className="menu nav2">
          <ul>
            <li>
              <a href="#Qui">Qui sommes nous ?</a>
            </li>
            <li>
              <a href="#Que">Que faisons nous ?</a>
            </li>
            <li>
              <a href="#Nous"> Nous contacter</a>
            </li>
          </ul>
        </div>
        <div id="buttons" className="buttons nav3">
        <Link to="/connexion" style={{textDecoration:'none'}}><button >se connecter</button></Link>
        <Link to="/inscription" style={{textDecoration:'none'}}><button style={{backgroundColor:'black',color:'white'}}>s'inscrire</button></Link>
        </div>
      </nav>
    </>
  );
}
