import { useEffect, useState } from "react";
import "./Canevas.css";
export function Canevas() {
  let user = localStorage.getItem("user");
  let userObject = JSON.parse(user);
  const [canevas, setCanevas] = useState([]);

  const getCanevas = async () => {
    try {
      const response = await fetch(
        `https://elek-consulting-group-server-side.onrender.com/api/canevas/${userObject._id}`,
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

      console.log("Les canevas sont la");

      const data = await response.json();
      console.log(data);
      setCanevas(data);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  useEffect(() => {
    getCanevas();
    console.log(canevas);
  }, []);

  /*const handleCanevas = ()=>{
        console.log('nouveau canevas');
    }*/

  return (
    <>
      <div className="canevas" id="canevas">
        <h3>Mes canevas</h3>
        <hr />
        <p style={{ padding: "0 3%", color: "gray" }}>
          {canevas.length} canevas
        </p>
        <div className="all-canevas">
          {canevas.length > 0 &&
            canevas.map((canevas, index) => (
              <div className="inner-canevas" key={index}>
                <h3 style={{ fontFamily: "Maven Pro" }}>{canevas.name}</h3>
                <embed
                  src={`https://elek-consulting-group-server-side.onrender.com/uploads/${canevas.name}`}
                  type="application/pdf"
                />
                <br />
                <a href={`https://elek-consulting-group-server-side.onrender.com/uploads/${canevas.name}`} download target="_blank" rel="noreferrer">
                  Télécharger le PDF
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
