import { useEffect, useState } from "react";
import "./Articles.css";
import { toast } from "react-toastify";
export function Articles() {
  let admin = localStorage.getItem("admin");
  let adminObject = JSON.parse(admin);

  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("content", content);
    form.append("image", image);
    form.append("id", adminObject._id);

    try {
      const response = await fetch("https://elek-consulting-group-server-side.onrender.com/article/upload", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      setMessage(data);
      console.log(message);
      toast.success('Article publié avec succes',{theme:'dark'});
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setMessage("Erreur lors de l'envoi du formulaire.");
    }
  };

  const getArticles = async () => {
    try {
      const response = await fetch(`https://elek-consulting-group-server-side.onrender.com/api/article`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        //throw new Error('La requête a échoué : ' + response.status);
        const err = await response.json();
        throw err;
      }

      console.log("Les articles sont la");

      const data = await response.json();
      console.log(data);
      //data.reverse();

      setArticles(data);
    } catch (err) {
      console.error("Erreur lors de la requête :", err);
    }
  };

  /*const handlePost = async (e) => {
    e.preventDefault();
    const formData = new FormData(this);

    try {
      const response = await fetch("https://elek-consulting-group-server-side.onrender.com/article/upload/", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Article publié avec succès :", result);
      } else {
        console.error("Échec de la publication de l'article :", result);
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };*/
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="articles" id="articles">
        <div>
          <h3 style={{ textAlign: "center" }}>Liste des articles</h3>
          <table
            className="articlesList"
            style={{
              borderCollapse: "collapse",
              margin: "0 auto",
              width: "50%",
            }}
          >
            <thead>
              <tr>
                <th>Numéro</th>
                <th>Titre</th>
                <th>Auteur</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {articles.length > 0 &&
                articles.map((article) => (
                  <tr key={article._id}>
                    <td>{articles.indexOf(article) + 1}</td>
                    <td>{article.title}</td>
                    <td>{article.admin.email}</td>
                    <td>{article.date_article.slice(0, 16)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: "50px" }}>
          <form
            id="publish-article-form"
            enctype="multipart/form-data"
            style={{
              width: "80%",
              margin: "0 auto",
              padding: "2%",
              boxShadow: "3px 3px 6px",
            }}
            onSubmit={handleSubmit}
          >
            <h3>Publier un article</h3>
            <label for="title">Titre :</label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={handleTitle}
            />
            <div id="titleError"></div>
            <br />
            <br />

            <label for="content">Contenu :</label>
            <br />
            <textarea
              id="content"
              name="content"
              rows="5"
              required
              style={{ width: "100%", height: "200px" }}
              onChange={handleContent}
            ></textarea>
            <div id="contentError"></div>
            <br />
            <br />

            <label for="image">Image :</label>
            <br />
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImage}
            />
            <div id="fileError"></div>

            <button>Publier</button>
          </form>
        </div>
      </div>
    </>
  );
}
