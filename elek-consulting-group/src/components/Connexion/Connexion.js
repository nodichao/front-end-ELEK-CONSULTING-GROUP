import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
//import "./Connexion.css";

export function Connexion() {
  return (
    <>
      <main id="main" className="main">
        <div className="connexion" id="connexion">
          <div className="myForm">
            <div className="inner-form1">
              <p>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  <img src="/retour64.png" alt="retour" /> <span>retour</span>
                </Link>
              </p>
              <img src="/utilisateur512.png" alt="utilisateur" />
            </div>
            <div className="inner-form2">
              <h2>Connectez vous !</h2>
              <form>
                <div>
                  <label>Login</label>
                  <input type="email" placeholder="exemple@gmail.com" />
                </div>
                <div>
                  <label>Password</label>
                  <input type="password" placeholder="********" />
                </div>
                <div>
                  <button>connexion</button>
                  <a href="/#">Mot de passe oublié ?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
