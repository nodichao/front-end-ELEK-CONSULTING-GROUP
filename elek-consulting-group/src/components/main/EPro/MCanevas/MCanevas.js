import "./MCanevas.css";
import { useState } from "react";
import {toast} from "react-toastify"
export function MCanevas() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [pdf, setPdf] = useState(null);

const handleEmail = (e)=>{
    setEmail(e.target.value);
}

const handlePDF = (e)=>{
  setPdf(e.target.files[0]);
}
  const handleSubmit =async (e)=>{

        e.preventDefault(); // Empêcher le rechargement de la page

    const formData = new FormData();
    formData.append('email', email);
    formData.append('pdf', pdf);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setMessage(data);
      console.log(message);
      toast.success('Canevas envoyé avec succes',{theme:'dark'});
      setTimeout(function() {
        window.location.reload();
    }, 3000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setMessage('Erreur lors de l\'envoi du formulaire.');
    }
  }

  return (
    <>
      <div className="MCanevas" id="MCanevas">
        <h3 style={{ margin: "1%" }}>Envoyer un canevas</h3>
        <form
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <label for="email">Adresse e-mail:</label>
          <br />
          <input type="email" id="Cemail" name="email" value={email} onChange={handleEmail} required />
          <br />
          <br />
          <label for="pdf">Télécharger le PDF:</label>
          <br />
          <input
            type="file"
            id="pdf"
            name="pdf"
            accept="application/pdf"
            onChange={handlePDF}
            required
          />
          <br />
          <br />
          <button>Soumettre</button>
        </form>
      </div>
    </>
  );
}
