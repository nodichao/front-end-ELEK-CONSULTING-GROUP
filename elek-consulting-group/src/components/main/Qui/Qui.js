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
                    <p id='desc1-text' style={{maxHeight: afficheText?'100%':'40%'}}>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                     doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                       ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                         porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                         adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                           qui dolorem eum fugiat quo voluptas nulla pariatur?"
                           adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                           qui dolorem eum fugiat quo voluptas nulla pariatur?"
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