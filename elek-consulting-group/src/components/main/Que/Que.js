import { useState } from 'react';
import './Que.css';

export function Que(){

     
     const [afficheText, setAfficheText]= useState(false);
     
     function afficherPlus(){
        
          afficheText?setAfficheText(false):setAfficheText(true);

     }

    return <>
         <div id='Que' className='Que'>
              <h3>Que faisons nous ?</h3>
              <div className='activite'>
                   <div className='act act2'>
                        <img src='../../../activite.png' alt='activite'/>
                   </div>
                   <div className='act act1'>
                    <p id='act1-text' style={{maxHeight: afficheText?'100%':'40%'}}>
                    Notre agence de consultance et d'orientation professionnelle se 
                    spécialise dans l'accompagnement des professionnels souhaitant se
                     reconvertir dans le secteur de la technologie. Nous comprenons les
                      défis et les aspirations de ceux qui cherchent à donner une nouvelle
                       direction à leur carrière, et nous sommes là pour faciliter cette
                        transition de manière fluide et efficace.
                        Nous mettons en relation nos clients avec des mentors expérimentés
                         dans les domaines technologiques qu'ils aspirent à intégrer. Ces mentors
                          apportent un soutien personnalisé, partagent leur expertise et fournissent 
                          des conseils précieux pour aider nos clients à naviguer dans leur nouvelle 
                          carrière. Que vous soyez intéressé par le développement web, la data science,
                           la cybersécurité ou tout autre domaine technologique, nous avons les ressources
                            pour vous connecter avec les bons experts.
                    </p>
                    <button id='plus' onClick={afficherPlus}>
                              {afficheText?"Voir Moins":"Voir Plus"}
                    </button>

                   </div>
              </div>
         </div>
    </>
}