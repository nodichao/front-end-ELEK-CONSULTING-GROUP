import './Banner.css';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
export function Banner() {

  const [redirect, setRedirect] = useState(null);

  const callHandler = () => {
    if (localStorage.getItem('user')) {
      setRedirect('/user/RDV');
    } else {
      setRedirect('/connexion');
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      
        <div id="banner" className="banner">
        <div className="title" id="title">
          <h1>
            Ensemble, bâtissons
            <br /> votre carrière
          </h1>
          <div className="bTitle">
            {/*<button>Demander un canevas</button>*/}
            <button onClick={callHandler}>Prendre un rendez-vous</button>
          </div>
        </div>
        </div>
        
      
    </>
  );
}