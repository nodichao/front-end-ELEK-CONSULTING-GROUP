//import { Footer } from "../../footer/Footer";
import { Navigate, useParams } from "react-router-dom";
import "./Blog.css";
import { useEffect, useState } from "react";

export function Blog(props) {
  let user = localStorage.getItem("user");
  let userObject = JSON.parse(user);
  const [like, setLike] = useState(false);
  
  function toLike(e){
    const heart = e.target;
      like?setLike(false):setLike(true);
      like?heart.src='/redLike.png':heart.src='/like.png'
  }
  //let i = 0;
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await fetch("https://elek-consulting-group-server-side.onrender.com/api/article", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        //throw new Error('La requête a échoué : ' + response.status);
        const err = await response.json();
        throw err;
      }

      console.log("Les artciles sont la");

      const data = await response.json();
      console.log(data);
      setArticles(data);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  useEffect(() => {
    getArticles();
    console.log(articles);
  }, []);

  return (
    <>
      <div id="Blog" className="Blog" style={{ width: "100%", height: "100%"}}>
        <div className="inner-blog1">
          <h3>A la une</h3>
          <hr />
          {articles.length>0 && articles.map((article,index)=>
            <div className="BArticle1" key={index} >
              <div className="BImage">
              <h2>{article.title}</h2>
                <img src={`https://elek-consulting-group-server-side.onrender.com/uploads/${article.image}`} alt="blogImage" />
              </div>
              

               <p>{article.content_article}</p>
               <div className="BInteractions">
                  <img src="/like.png" alt="like" onClick={toLike}/>
                </div>
            </div>
            )
            
          }
        </div>
      </div>
    </>
  );
}
