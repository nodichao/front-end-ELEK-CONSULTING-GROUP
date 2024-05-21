import { useState } from 'react';
import './Qui.css';

export function Qui(){

     
     const [afficheText, setAfficheText]= useState(false);
     
     function afficherPlus(){
        
          afficheText?setAfficheText(false):setAfficheText(true);

     }

    return <>
         <div id='Qui' className='Qui'>
              <h3>Qui sommes nous ?</h3>
              <div className='description'>
                   <div className='desc desc1'>
                    <p id='desc1-text' style={{maxHeight: afficheText?'100%':'20%'}}>
                    ELEK CONSULTING GROUP est une agence de conseil et d'orientation en
                     reconversion professionnelle spécialisée dans les métiers du numérique. 
                     Elle accompagne les professionnels et les étudiants dans la définition
                      et la mise en œuvre de leur projet professionnel en leur offrant une 
                      orientation personnalisée et un accès privilégié aux formations adaptées.
                    </p>
                    <button id='plus' onClick={afficherPlus}>
                              {afficheText?"Voir Moins":"Voir Plus"}
                    </button>

                   </div>
                   <div className='desc desc2'>
                        <img src='../../../description.png' alt='description'/>
                   </div>
              </div>
         </div>
    </>
}