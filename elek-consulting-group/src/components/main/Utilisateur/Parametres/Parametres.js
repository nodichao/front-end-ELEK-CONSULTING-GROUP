import { useState } from "react";
import "./Parametres.css";
import { toast } from "react-toastify";
export function Parametres() {
  let user = localStorage.getItem("user");
  let userObject = JSON.parse(user);
  const [firstName, setFirstName] = useState(userObject.firstName);
  const [lastName, setLastName] = useState(userObject.lastName);
  const [email, setEmail] = useState(userObject.email);
  const [phone_number, set_phone_number] = useState(userObject.phone_number);
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [match, setMatch] = useState(true);
  const [profession, setProfession] = useState("");
  const [descPro, setDescPro] = useState("");
  //console.log(userObject);
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    set_phone_number(e.target.value);
  };

  const handleOldPass = (e) => {
    setOldPass(e.target.value);
  };

  const handleNewPass = (e) => {
    setNewPass(e.target.value);
    if (e.target.value === confirmNewPass) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  const handlePro = (e)=>{
     setProfession(e.target.value);
  }

  const handleDescPro =(e)=>{
     setDescPro(e.target.value);
  }
  const handleConfirmNewPass = (e) => {
    setConfirmNewPass(e.target.value);
    if (e.target.value === newPass) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  
  const handleSelfInfo = async (e) => {
    e.preventDefault();
    

    try {
      const response = await fetch(
        `https://elek-consulting-group-server-side.onrender.com/api/user/${userObject._id}`,
        {
          method: "PUT",
          credentials: "include",
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone_number: phone_number,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw err;
      }

      console.log("La requête a réussi !");
      const responseData = await response.json();
      userObject = responseData;
      console.log(userObject);
      localStorage.setItem("user", JSON.stringify(userObject));
      //alert("Mise a jour effectuée");  
      toast.success('Mise a jour effectuée',{theme:'dark'});
    } catch (err) {
      

      console.error("Erreur lors de la requête :", err);
      toast.error('Echec de la mise a jour',{theme:'dark'});
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPass.length < 6) {
      document.getElementById('newPassError').innerText ='Au moins 6 caractères pour le mot de passe';
      stylingFunction(document.getElementById('newPassError'));
      return;
    }else{
        document.getElementById('newPassError').innerText =''
    }

    if (!match) {
        document.getElementById('confirmNewPassError').innerText ='Les mots de passe ne correspondent pas';
        stylingFunction(document.getElementById('confirmNewPassError'));
        return;
      }else{
        document.getElementById('confirmNewPassError').innerText ='';
    }

    try {
        const response = await fetch(
          `https://elek-consulting-group-server-side.onrender.com/api/user/password/${userObject._id}`,
          {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({
              oldPass:oldPass,
              newPass:newPass
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
  
        if (!response.ok) {
          const err = await response.json();
          throw err;
        }
  
        console.log("La requête a réussi !");
        const responseData = await response.json();
        console.log(responseData);
        toast.success('Mise a jour effectuée',{theme:'dark'});

      } catch (err) {
        
  
        console.error("Erreur lors de la requête :", err);
        document.getElementById('passError').innerText=err.error;
        stylingFunction(document.getElementById('passError'));

      }
  };
  function stylingFunction(element){
    
    element.style.color='red';
    element.style.fontFamily='Maven Pro';
    return element;
   }

  
  const handleCareer =async (e)=>{
       e.preventDefault();
       if(profession.length === 0){
        document.getElementById('proError').innerText='vous n\'avez rien renseigné';
        stylingFunction(document.getElementById('proError'));
        return;
       }else{
        document.getElementById('proError').innerText=''
       }

       if(descPro.length === 0){
        document.getElementById('proError').innerText='vous n\'avez pas mis la description du métier(ci-dessous)';
        stylingFunction(document.getElementById('descProError'));
            return;
       }else{
        document.getElementById('descProError').innerText=''

       }
      // console.log(profession, descPro);
       try {
        const response = await fetch(
          `https://elek-consulting-group-server-side.onrender.com/api/user/${userObject._id}`,
          {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({
              profession:profession,
              desc_profession:descPro
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
  
        if (!response.ok) {
          const err = await response.json();
          throw err;
        }
  
        console.log("La requête a réussi !");
        const responseData = await response.json();
        userObject = responseData;
        console.log(userObject);
        localStorage.setItem("user", JSON.stringify(userObject));
        toast.success('Mise a jour effectuée',{theme:'dark'});
        

      } catch (err) {
        
  
        console.error("Erreur lors de la requête :", err);
      }

    }
  return (
    <>
      <div className="Parametres" id="Parametres">
        <div>
          <h2>Informations de compte</h2>
          <form>
            <h3>Informations Personnelles</h3>
            <label for="prenom">Prénom:</label>
            <br />
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              defaultValue={userObject.firstName}
              onChange={handleFirstName}
            />
            <br />
            <br />
            <label for="nom">Nom:</label>
            <br />
            <input
              type="text"
              id="nom"
              name="nom"
              required
              defaultValue={userObject.lastName}
              onChange={handleLastName}
            />
            <br />
            <br />
            <label for="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              defaultValue={userObject.email}
              onChange={handleEmail}
            />
            <br />
            <br />
            <label for="telephone">Numéro de Téléphone:</label>
            <br />
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              defaultValue={userObject.phone_number}
              onChange={handlePhoneNumber}
            />
            <br />
            <br />
            <button onClick={handleSelfInfo}>Modifier</button>
          </form>
          <form>
            <h3>Modification de Mot de Passe</h3>
            <label for="motdepasse">Actuel mot de passe :</label>
            <br />
            <input type="password" id="motdepasse" name="motdepasse" required onChange={handleOldPass}/>
            <div id="passError"></div>
            <br />
            <br />
            <label for="newPass">Nouveau mot de passe:</label>
            <br />
            <input
              type="password"
              id="Nmotdepasse"
              name="newPass"
              required
              onChange={handleNewPass}
            />
            <div id="newPassError"></div>
            <br />
            <br />

            <label for="confirmNewPass">Confirmer nouveau mot de passe:</label>
            <br />
            <input
              type="password"
              id="confirmermotdepasse"
              name="confirmNewPass"
              onChange={handleConfirmNewPass}
              required
            />
            <div id="confirmNewPassError"></div>
            <br />

            <button onClick={handleChangePassword}>modifier</button>
          </form>
        </div>

        <div>
          <h2>Projet professionnel</h2>
          <p>
            <i>
              « La seule façon de faire du bon travail est d’aimer ce que vous
              faites. Si vous n’avez pas encore trouvé , continuez à chercher. »
              <br />
              <br />
              Steve Jobs
            </i>
          </p>
          <form>
            <label for="metier">Quelle profession voulez vous exercer ?</label>
            <br />
            <input type="text" id="metier" name="metier" required onChange={handlePro} defaultValue={userObject.profession}
/>
            <div id="proError"></div>
            <br />

            <label for="description">Description:</label>
            <br />
            <textarea
              id="description"
              name="description"
              required
              placeholder="Donnez nous plus de details sur ce metier"
              onChange={handleDescPro}
              defaultValue={userObject.desc_profession}
            ></textarea>
            <div id="descProError"></div>
            <br />
           
           
            <button onClick={handleCareer}>valider</button>
            
          </form>
        </div>
      </div>
    </>
  );
}
