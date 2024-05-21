import { toast } from "react-toastify";
import "./Pro.css";
import { useEffect, useState } from "react";
export function Pro() {
  const [Pros, setPros] = useState([]);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phone, setPhone] = useState("");
  const [match, setMatch] = useState(true);
  

  const handlePrenom = (e) => {
    setPrenom(e.target.value);
  };

  const handleNom = (e) => {
    setNom(e.target.value);
  };

  const handleProfession = (e) => {
    setProfession(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
    if (e.target.value === confirmPass) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
    if (e.target.value === pass) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const getPros = async () => {
    try {
      const response = await fetch(`https://elek-consulting-group-server-side.vercel.app/api/pro`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        //throw new Error('La requête a échoué : ' + response.status);
        const err = await response.json();
        throw err;
      }

      console.log("Les Pros sont la");

      const data = await response.json();
      console.log(data);
      //data.reverse();

      setPros(data);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  const createPro = async (e) => {
    e.preventDefault();
    if (!match) {
      document.getElementById("confirmPassError").innerText =
        "les mots de passe ne matchent pas";
      stylingFunction(document.getElementById("confirmPassError"));
      return;
    }

    if (prenom === "") {
      document.getElementById("prenomError").innerText = "ce champ est requis";
      stylingFunction(document.getElementById("prenomError"));
    } else {
      document.getElementById("prenomError").innerText = "";
    }

    if (nom === "") {
      document.getElementById("nomError").innerText = "ce champ est requis";
      stylingFunction(document.getElementById("nomError"));
    } else {
      document.getElementById("nomError").innerText = "";
    }

    if (email === "") {
      document.getElementById("professionError").innerText =
        "specifiez la profession";
      stylingFunction(document.getElementById("professionError"));
    } else {
      document.getElementById("professionError").innerText = "";
    }

    if (pass === "") {
      document.getElementById("passError").innerText = "ce champ est requis";
      stylingFunction(document.getElementById("passError"));
    } else {
      document.getElementById("passError").innerText = "";
    }

    if (confirmPass === "") {
      document.getElementById("confirmPassError").innerText =
        "ce champ est requis";
      stylingFunction(document.getElementById("confirmPassError"));
    } else {
      document.getElementById("confirmPassError").innerText = "";
    }

    if (phone === "") {
      document.getElementById("phoneError").innerText = "ce champ est requis";
      stylingFunction(document.getElementById("phoneError"));
    } else {
      document.getElementById("phoneError").innerText = "";
    }

    if (profession === "") {
      document.getElementById("professionError").innerText =
        "ce champ est requis";
      stylingFunction(document.getElementById("professionError"));
    } else {
      document.getElementById("professionError").innerText = "";
    }
    //console.log({prenom,nom,email,pass,confirmPass,phone,profession});

    try {
      const response = await fetch("https://elek-consulting-group-server-side.vercel.app/api/user", {
        method: "POST",
        body: JSON.stringify({
          firstName: prenom,
          lastName: nom,
          email: email,
          password: pass,
          phone_number: phone,
          profession,
          role: "pro",
        }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        //throw new Error('La requête a échoué : ' + response.status);
        const err = await response.json();
        throw err;
      }

      console.log("La requête a réussi !");
      const data = await response.json();
      console.log(data);
      toast.success("compte pro créé avec succès", { theme: "dark" });
      window.location.reload();
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  function stylingFunction(element) {
    element.style.fontSize = "15px";
    element.style.color = "red";
    element.style.fontFamily = "Maven Pro";
    element.style.position = "absolute";
    return element;
  }

  const deletePro = async (id) => {
    try {
      const response = await fetch(`https://elek-consulting-group-server-side.vercel.app/api/user/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        //throw new Error('La requête a échoué : ' + response.status);
        const err = await response.json();
        throw err;
      }

      console.log("La requête a réussi !");
      const data = await response.json();
      console.log(data);
      toast.success("compte pro créé avec succès", { theme: "dark" });
      window.location.reload();
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  
 
  useEffect(() => {
    getPros();
  }, []);

  return (
    <>
      <div className="Pros" id="Pros">
       
          <div className="proList">
            <h3 style={{ textAlign: "center" }}>Liste des professionnels</h3>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Profession</th>
                  <th>Email</th>
                  <th>Telephone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Pros.length > 0 &&
                  Pros.map((pro, index) => (
                    <tr key={pro._id}>
                      <td> {pro.firstName}</td>
                      <td>{pro.lastName}</td>

                      <td>{pro.profession}</td>
                      <td>{pro.email}</td>
                      <td>{pro.phone_number} </td>
                      <td>
                        <img
                          src="/delete.png"
                          alt="supprimer"
                          style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                            marginLeft:"20%"
                          }}
                          title="supprimer"
                          onClick={() => deletePro(pro._id)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="addPro">
            <h3 style={{ textAlign: "center" }}>Ajouter un compte Pro</h3>
            <form>
              <div>
                <label for="prenom">Prénom:</label>
                <br />
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  onChange={handlePrenom}
                />
                <div id="prenomError"></div>
              </div>
              <br />
              <div class="form-group">
                <label for="nom">Nom:</label>
                <br />
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  onChange={handleNom}
                />
                <div id="nomError"></div>
              </div>
              <br />
              <div class="form-group">
                <label>Profession</label>
                <br />
                <br />
                <input
                  type="radio"
                  id="developpementWeb"
                  name="domaine"
                  value="WEB DEVELOPPER SENIOR"
                  onChange={handleProfession}
                  required
                />
                <label for="developpementWeb"> Développeur web</label>
                <br />
                <br />
                <input
                  type="radio"
                  id="marketingDigital"
                  name="domaine"
                  value="DIGITAL MARKETER"
                  onChange={handleProfession}
                  required
                />
                <label for="marketingDigital">Digital marketer</label>
                <br />
                <br />

                <input
                  type="radio"
                  id="dataAnalyst"
                  name="domaine"
                  value="DATA ANALYST"
                  onChange={handleProfession}
                  required
                />
                <label for="dataAnalyst"> Data analyst</label>
                <br />
                <br />

                <input
                  type="radio"
                  id="ingenieurReseaux"
                  name="domaine"
                  value="NETWORK ENGINEER"
                  onChange={handleProfession}
                  required
                />
                <label for="ingenieurReseaux"> Ingénieur réseaux</label>
                <div id="professionError"></div>
                <br />
                <br />
              </div>
              <br />
              <div class="form-group">
                <label for="telephone">Téléphone:</label>
                <br />
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  onChange={handlePhone}
                />
                <div id="phoneError"></div>
              </div>
              <br />
              <div class="form-group">
                <label for="email">Email:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleEmail}
                />
                <div id="mailError"></div>
              </div>
              <br />
              <div class="form-group">
                <label for="password">Mot de passe:</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  onChange={handlePass}
                  value={pass}
                />
                <div id="passError"></div>
              </div>
              <br />
              <div class="form-group">
                <label for="confirm-password">Confirmer Mot de Passe:</label>
                <br />
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  onChange={handleConfirmPass}
                  value={confirmPass}
                  required
                />
                <div id="confirmPassError"></div>
              </div>
              <br />
              <button onClick={createPro}>S'inscrire</button>
            </form>
          </div>
        
        
      </div>
    </>
  );
}
