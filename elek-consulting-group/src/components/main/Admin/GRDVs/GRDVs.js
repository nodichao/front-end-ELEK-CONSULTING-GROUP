import { useEffect, useState } from "react";
import "./GRDVs.css";
export function GRDVs() {
  const [RDVs, setRDVs] = useState([]);

  const getRDVs = async () => {
    try {
      const response = await fetch(`https://elek-consulting-group-server-side.onrender.com/api/rdv`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        //throw new Error('La requête a échoué : ' + response.status);
        const err = await response.json();
        throw err;
      }

      console.log("Les RDVs sont la");

      const data = await response.json();
      console.log(data);
      //data.reverse();
      setRDVs(data);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  useEffect(() => {
    getRDVs();
  }, []);
  return (
    <>
      <div className="GRDVs" id="GRDVs" style={{ fontFamily: "Maven Pro" }}>
        <h3 style={{ textAlign: "center" }}>Liste des rendez-vous</h3>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Num</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Etudiant</th>

              <th>Email Etudiant</th>
              <th>Telephone Etudiant</th>
              <th>Mentor</th>
              <th>Profession</th>
              <th>Email Mentor</th>
              <th>Telephone Mentor</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {RDVs.length > 0 &&
              RDVs.map((rdv, index) => (
                <tr key={rdv._id}>
                  <td>{index + 1}</td>
                  <td>{rdv.date.slice(0,10)}</td>
                  <td>{(parseInt(rdv.date.slice(11,16))+2).toString()}{rdv.date.slice(13,16)}</td>
                  <td>
                    {rdv.student.firstName} {rdv.student.lastName}
                  </td>
                  <td>{rdv.student.email}</td>
                  <td>{rdv.student.phone_number}</td>
                  <td>
                    {rdv.pro.firstName} {rdv.pro.lastName}
                  </td>
                  <td>{rdv.pro.profession}</td>
                  <td>{rdv.pro.email}</td>
                  <td>{rdv.pro.phone_number}</td>
                  <td>{rdv.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
