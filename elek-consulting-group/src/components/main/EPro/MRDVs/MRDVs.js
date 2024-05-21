import "./MRDVs.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function MRDVs() {
  const [MRDVs, setMRDVs] = useState([]);
  let pro = localStorage.getItem("pro");
  let proObject = JSON.parse(pro);

  const getMRDVs = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/pro/rdv/${proObject._id}`,
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
      setMRDVs(data);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  const accept = async (id) => {
    const rdv = MRDVs.find((rdv) => rdv._id === id);
    console.log(rdv);
    try {
      const response = await fetch(`http://localhost:5000/api/rdv/${id}`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify({ ...rdv, status: "accepté" }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const err = await response.json();
        throw err;
      }

      console.log("La requête a réussi !");
      const responseData = await response.json();
      console.log(responseData);
      toast.success("rendez-vous accepté", { theme: "dark" });
      window.location.reload();
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  const refuse = async (id) => {
    const rdv = MRDVs.find((rdv) => rdv._id === id);
    //console.log(rdv);
    try {
      const response = await fetch(`http://localhost:5000/api/rdv/${id}`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify({ ...rdv, status: "annulé" }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const err = await response.json();
        throw err;
      }

      console.log("La requête a réussi !");
      const responseData = await response.json();
      console.log(responseData);
      toast.success("rendez-vous annulé", { theme: "dark" });
      window.location.reload();
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  const deleteRDV = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/rdv/${id}`, {
        method: "DELETE",
        credentials: "include"
      });

      if (!response.ok) {
        const err = await response.json();
        throw err;
      }

      console.log("La requête a réussi !");
      const responseData = await response.json();
      console.log(responseData);
      toast.success("rendez-vous supprimé avec succès", { theme: "dark" });
      window.location.reload();
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  useEffect(() => {
    getMRDVs();
  }, []);

  return (
    <>
      <div className="MRDVs" id="MRDVs">
        <h3>Mes rendez-vous</h3>

        {
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Date</th>
                <th>Heure</th>
                <th>Note</th>
                <th>Statut</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {MRDVs.length > 0 &&
                MRDVs.map((rdv) => (
                  <tr key={rdv._id}>
                    <td>{rdv.student.firstName}</td>
                    <td>{rdv.student.lastName}</td>
                    <td>{rdv.student.email}</td>
                    <td>{rdv.student.phone_number}</td>
                    <td>{rdv.date.slice(0, 10)}</td>
                    <td>
                      {parseInt(rdv.date.slice(11, 13)) + 2}
                      {rdv.date.slice(13, 16)}
                    </td>
                    <td>{rdv.note}</td>
                    <td>{rdv.status}</td>
                    <td>
                      {rdv.status === "en attente" && (
                        <div style={{ fontFamily: "Maven Pro" }}>
                          <button
                            style={{
                              backgroundColor: "#08CC0A",
                              margin: "1px",
                              color: "white",
                            }}
                            onClick={() => accept(rdv._id)}
                          >
                            accepter
                          </button>
                          <button
                            style={{
                              backgroundColor: "red",
                              margin: "1px",
                              color: "white",
                            }}
                            onClick={() => refuse(rdv._id)}
                          >
                            refuser
                          </button>
                        </div>
                      )}
                      {rdv.status !== "en attente" && (
                        <div>
                          <img
                            src="/delete.png"
                            alt="supprimer"
                            style={{
                              width: "20px",
                              height: "20px",
                              cursor: "pointer",
                              marginLeft: "20%",
                            }}
                            title="supprimer"
                            onClick={() => deleteRDV(rdv._id)}
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        }
      </div>
    </>
  );
}
