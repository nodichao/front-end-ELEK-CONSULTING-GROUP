import './footer.css';
export function Footer() {
  return (
    <>
      
        <footer id='footer' className='footer'>
            <div className='footWrapper'>
              <div className='footContent'>
                  <div className='footLogo'>
                    <img src='logoECG1.png' alt='logoECG'/>
                    <p>
                        “Une vision plus claire pour un avenir meilleur”
                    </p>
                  </div>
                  <div className='footList'>
                      <ul>
                          <li>Qui sommes nous ?</li>
                          <li>Que faisons nous ?</li>
                          <li>Nous contacter</li>
                          <li>Demander une orientation</li>
                          <li>Prendre un rendez-vous</li>
                      </ul>
                  </div>
                  
              </div>
               <p id='copyright'>
                  © 2024. All rights reserved
               </p>
            </div>
        </footer>
        
      
    </>
  );
}