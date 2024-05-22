import { Link,Navigate} from "react-router-dom";
import { Footer } from "../footer/Footer";
import { useState } from "react";
import "./Inscription.css";


export function Inscription() {
  const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [match, setMatch] = useState(true);
      const [redirectToLogin, setRedirectToLogin] = useState(false);
      

  
  const submitHandler = async(e)=>{
    e.preventDefault();
    const form = document.getElementById('IForm');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const phoneNumberError = document.getElementById('phoneNumberError');
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if(!match){
        confirmPasswordError.innerText='les mots de passe ne matchent pas';
        return;
    }
    
   const firstName = form.prenom.value;
    const lastName = form.nom.value;
   const email = form.email.value;
   const password = form.password.value;
   const phone_number = form.phone_number.value;
   
   try {
        const response = await fetch('https://front-end-elek-consulting-group.vercel.app/api/user', {
        method: 'POST',
        body: JSON.stringify({ firstName,lastName, email, password, phone_number }),
        headers: { 'Content-Type': 'application/json' }
      });
    
      
      if (!response.ok) {
         //throw new Error('La requête a échoué : ' + response.status);
         const err= await response.json()
         throw err;
      }
    
      
      console.log('La requête a réussi !');
      const data = await response.json();
      console.log(data);
      setRedirectToLogin(true);
    } catch (err) {
      
      function stylingFunction(element){
       element.style.fontSize="10px";
       element.style.color='red';
       element.style.fontFamily='Maven Pro';
       element.style.position ="absolute";
       return element;
      }
      console.error('Erreur lors de la requête :', err);
      emailError.innerText = err.email;
      passwordError.innerText = err.password;
      phoneNumberError.innerText = err.phone_number;
      firstNameError.innerText = err.firstName;
      lastNameError.innerText =err.lastName;

      stylingFunction(emailError);
      stylingFunction(passwordError);
      stylingFunction(phoneNumberError);
      stylingFunction(firstNameError);
      stylingFunction(lastNameError);
      stylingFunction(confirmPasswordError);
      
      
     
    }
  }
    
    
      
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value === confirmPassword) {
          setMatch(true);
        } else {
          setMatch(false);
        }
      };
    
      const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === password) {
          setMatch(true);
        } else {
          setMatch(false);
        }
      };
    
      if(redirectToLogin){
        return <Navigate to="/connexion"/>
      }
  
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
            <form id="IForm">
              <div className="inner-myform2">
                <div>
                  <label>Prénom(s)</label><br />
                  <input type="text" name="prenom" placeholder="Ex : John"  required/>
                  <div id="firstNameError">

                </div>
                  <br />
                  <br />
                  <label>Nom</label><br />
                  <input type="text" name="nom" placeholder="Ex : Doe"  required/>
                  <div id="lastNameError">

                </div>
                  <br />
                  <br />
                  <label>Telephone</label><br />
                  <input type="tel" name="phone_number" placeholder="Ex : 770000000"  required/>
                  <div id="phoneNumberError">

                  </div>
                  <br />
                  <br />
                </div>
                <div>
                  <label>Email</label><br />
                  <input type="email" name="email" placeholder="exemple@gmail.com"  required/>
                  <div id="emailError">

                  </div>
                  <br />
                  <br />
                  <label>Mot de passe</label><br />
                  <input type="password" name="password" placeholder="********"  value={password}  onChange={handlePasswordChange}required/>
                  <div id="passwordError">

                  </div>
                  <br />
                  <br />
                  <label>Confirmer le mot de passe</label><br />
                  <input type="password" name="Cpassword" placeholder="********" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
                  <div id="confirmPasswordError">

                  </div>
                  <br />
                  <br />
                </div>
              </div>
              <div className="Ibutton">
                  <button onClick={submitHandler}>valider</button>
                </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
