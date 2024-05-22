import { Link,Navigate } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { useEffect, useState } from "react";
import{toast} from "react-toastify"
//import "./Connexion.css";

export function Connexion() {


  const [data, setData] = useState('');
  
  
  const submitHandler = async(e)=>{
    e.preventDefault();
    const form = document.getElementById('LForm');
    const loginError = document.getElementById('loginError');
    const passError = document.getElementById('passError');
   

   
    
   
   const login = form.login.value;
   const pass = form.pass.value;
   
   
   try {
        const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ email:login, password:pass }),
        headers: { 'Content-Type': 'application/json' }
      });
    
      
      if (!response.ok) {
         //throw new Error('La requête a échoué : ' + response.status);
         const err= await response.json()
         throw err;
      }
    
      
      console.log('La requête a réussi !');
       const responseData = await response.json();
       console.log(responseData);
       setData(responseData);
      
      
    } catch (err) {
      //console.log(err);
      function stylingFunction(element){
       element.style.fontSize="15px";
       element.style.color='red';
       element.style.fontFamily='Maven Pro';
       //element.style.position ="absolute";
       return element;
      }
      console.error('Erreur lors de la requête :', err);
      loginError.innerText = err.email;
      passError.innerText = err.password;
      
      stylingFunction(loginError);
      stylingFunction(passError);
    }
  }
  
  /*if(data.role==='user'){
    localStorage.setItem('user',JSON.stringify(data));
    return <Navigate to={`/user`} />

  }else if(data.role==='admin'){
    localStorage.setItem('admin',JSON.stringify(data));
    return <Navigate to={`/admin`} />

  }else{
    localStorage.setItem('pro',JSON.stringify(data));
    return <Navigate to={`/pro`} />
  }*/
  switch(data.role){
    case "user":
      localStorage.setItem('user',JSON.stringify(data));
      setTimeout(()=>
        toast.success('connexion réussie',{theme:'dark'}),3000
      )
      return <Navigate to={`/user`} />
    case "admin":
      localStorage.setItem('admin',JSON.stringify(data));
      setTimeout(()=>
        toast.success('connexion réussie',{theme:'dark'}),3000
      )
      return <Navigate to={`/admin`} />
    case "pro":
      localStorage.setItem('pro',JSON.stringify(data));
      setTimeout(()=>
        toast.success('connexion réussie',{theme:'dark'}),3000
      )
      return <Navigate to={`/pro`} />
      default:
         console.log("erreur");
         break;
  }



  return (
    <>
      <main id="main" className="main">
        <div className="connexion" id="connexion">
          <div className="myForm">
            <div className="inner-form1">
              <p>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  <img src="/retour64.png" alt="retour" /> <span>retour</span>
                </Link>
              </p>
              <img src="/utilisateur512.png" alt="utilisateur"  className="userLogo"/>
            </div>
            <div className="inner-form2">
              <h2>Connectez vous !</h2>
              <form id="LForm">
                <div>
                  <label>Login</label><br/>
                  <input type="email" placeholder="exemple@gmail.com" name="login"/>
                  <div id="loginError">

                  </div>
                </div>
                <div>
                  <label>Password</label><br/>
                  <input type="password" placeholder="********" name="pass" />
                  <div id="passError">

                  </div>
                </div>
                <div>
                  <button onClick={submitHandler}>connexion</button>
                  {/*<a href="/#">Mot de passe oublié ?</a>*/}
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
