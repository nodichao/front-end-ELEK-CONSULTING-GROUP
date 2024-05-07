import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
import "./Inscription.css";

export function Inscription() {
  return (
    <>
      <main id="main" className="main">
        <div className="inscription" id="inscription">
          <div className="myForm2">
            <p>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                <img src="/retour64.png" alt="retour" /> <span>retour</span>
              </Link>
            </p>
            <h2>Inscription</h2>
            <form>
              <div className="inner-myform2">
                <div>
                  <label>Prénom(s)</label><br />
                  <input type="text" name="prenom" placeholder="Ex : John" />
                  <br />
                  <br />
                  <label>Nom</label><br />
                  <input type="text" name="nom" placeholder="Ex : Doe" />
                  <br />
                  <br />
                </div>
                <div>
                  <label>Email</label><br />
                  <input type="email" name="email" placeholder="exemple@gmail.com" />
                  <br />
                  <br />
                  <label>Mot de passe</label><br />
                  <input type="password" name="password" placeholder="********" />
                  <br />
                  <br />
                  <label>Confirmer le mot de passe</label><br />
                  <input type="password" name="Cpassword" placeholder="********" />
                  <br />
                  <br />
                </div>
              </div>
              <div className="Ibutton">
                  <button>valider</button>
                </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
