import { useEffect, useState } from "react";
import "./RDVs.css";
import { toast } from "react-toastify";

export function RDVs() {
  const [domaine, setDomaine] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [note, setNote] = useState("");
  const [presence, setPresence] = useState(false);
  const [RDVs, setRDVs] = useState([]);
  let user = localStorage.getItem("user");
  let userObject = JSON.parse(user);

  const handleDomaine = (e) => {
    setDomaine(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleHour = (e) => {
    setHour(e.target.value);
  };

  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const handlePresence = (e) => {
    presence ? setPresence(false) : setPresence(true);
  };

  const rdvHandler = async (e) => {
    e.preventDefault();
    if (!domaine) {
      document.getElementById("domainError").innerText =
        "vous devez selectionner un domaine";
      stylingFunction(document.getElementById("domainError"));
      return;
    } else {
      document.getElementById("domainError").innerText = "";
    }
    if (!date) {
      document.getElementById("dateError").innerText =
        "vous devez choisir une date";
      stylingFunction(document.getElementById("dateError"));
      return;
    } else {
      document.getElementById("dateError").innerText = "";
    }

    if (!hour) {
      document.getElementById("hourError").innerText =
        "vous devez choisir une heure";
      stylingFunction(document.getElementById("hourError"));
      return;
    } else {
      document.getElementById("hourError").innerText = "";
    }

    if (!note) {
      document.getElementById("noteError").innerText =
        "Laissez au moins une petite note";
      stylingFunction(document.getElementById("noteError"));
      return;
    } else {
      document.getElementById("noteError").innerText = "";
    }
    if (!presence) {
      document.getElementById("presenceError").innerText =
        "Vous devez confirmer votre presence";
      stylingFunction(document.getElementById("presenceError"));
      return;
    } else {
      document.getElementById("presenceError").innerText = "";
    }
    console.log(domaine);

    try {
      const response = await fetch(`http://localhost:5000/api/rdv/${userObject._id}`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          domain: domaine,
          date: date,
          hour: hour,
          note: note,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const err = await response.json();
        throw err;
      }

      console.log("La requête a réussi !");
      const responseData = await response.json();
      console.log(responseData);
      toast.success('Demande effectuée',{theme:'dark'});
      window.location.reload();
      //userObject = responseData;
      //console.log(userObject);
      //localStorage.setItem("user", JSON.stringify(userObject));
      //alert("Mise a jour effectuée");
      //toast.success('Mise a jour effectuée',{theme:'dark'});
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
      
    }
  };
  function stylingFunction(element) {
    element.style.color = "red";
    element.style.fontFamily = "Maven Pro";
    return element;
  }

  const getRDVs = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/rdv/${userObject._id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        //throw new Error('La requête a échoué : ' + response.status);
        const err = await response.json();
        throw err;
      }

      console.log("Les RDVs sont la");

      const data = await response.json();
      console.log(data);
      data.reverse();
      setRDVs(data);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  const deleteRDV = async (id)=>{
    
    try {
      const response = await fetch(
        `http://localhost:5000/api/rdv/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        //throw new Error('La requête a échoué : ' + response.status);
        const err = await response.json();
        throw err;
      }

      console.log("RDVs supprimé");

      const data = await response.json();
      console.log(data);
      toast.success('RDV supprimé avec succès',{theme:'dark'});
      window.location.reload();
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  }


  useEffect(()=>{
  getRDVs();
  //console.log(RDVs);

  },[])
  return (
    <>
      <div className="RDVs" id="RDVs">
        <div className="inner-rdv1">
          <h3>Prise de Rendez-vous avec un Mentor</h3>

          <form id="appointmentForm">
            <div>
              <label>Domaine d'intérêt ou de mentorat :</label>
              <br />
              <br />
              <input
                type="radio"
                id="developpementWeb"
                name="domaine"
                value="WEB DEVELOPPER SENIOR"
                onChange={handleDomaine}
                required
              />
              <label for="developpementWeb"> Développement web</label>
              <br />
              <br />
              <input
                type="radio"
                id="marketingDigital"
                name="domaine"
                value="DIGITAL MARKETER"
                onChange={handleDomaine}
                required
              />
              <label for="marketingDigital"> Marketing digital</label>
              <br />
              <br />

              <input
                type="radio"
                id="dataAnalyst"
                name="domaine"
                value="DATA ANALYST"
                onChange={handleDomaine}
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
                onChange={handleDomaine}
                required
              />
              <label for="ingenieurReseaux"> Ingénieur réseaux</label>
              <div id="domainError"></div>
              <br />
              <br />
            </div>
            <div>
              <label for="date">Date souhaitée du rendez-vous :</label>
              <br />
              <input type="date" id="date" name="date" onChange={handleDate} />
              <div id="dateError"></div>
              <br />
            </div>
            <div>
              <label for="heure">Heure souhaitée du rendez-vous :</label>
              <br />
              <input
                type="time"
                id="heure"
                name="heure"
                onChange={handleHour}
              />
              <div id="hourError"></div>
              <br />
              <br />
            </div>
            <div>
              <label for="objectifs">
                Objectifs ou sujets à discuter avec le mentor :
              </label>
              <br />
              <textarea
                id="objectifs"
                name="objectifs"
                rows="4"
                cols="50"
                placeholder="ces informations facilitent la prise en charge, alors exprimez vous"
                onChange={handleNote}
              ></textarea>
              <div id="noteError"></div>
            </div>
            <div>
              <input
                type="checkbox"
                id="confirmation"
                name="confirmation"
                required
                onChange={handlePresence}
              />
              <label for="confirmation">
                {" "}
                Je confirme que je suis disponible à la date et à l'heure
                sélectionnées.
              </label>
              <div id="presenceError"></div>
              <br />
            </div>
            <div>
              <button type="submit" onClick={rdvHandler}>
                Envoyer
              </button>
            </div>
          </form>
        </div>
        <div className="inner-rdv2">
          <h3>Rendez-vous à venir</h3>
          <p style={{ color: "gray" }}>{RDVs.length} rendez-vous</p>
          {(<table style={{ borderCollapse: "collapse", width: "90%" }}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Heure</th>
                <th>Mentor</th>
                <th>Statut</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {RDVs.length >0 && RDVs.map((rdv,index)=>(
                <tr key={rdv._id}>
                <td>{rdv.date.substring(0,10)}</td>
                <td>{(parseInt(rdv.date.slice(11,13))+2).toString()}{rdv.date.slice(13,16)}</td>
                <td>{rdv.pro.firstName} {rdv.pro.lastName} {rdv.pro.profession}</td>
                <td>{rdv.status}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      fontFamily: "Maven Pro",
                    }}
                    onClick={()=>deleteRDV(rdv._id)}
                  >
                    Annuler
                  </button>
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>)}
        </div>
      </div>
    </>
  );
}
