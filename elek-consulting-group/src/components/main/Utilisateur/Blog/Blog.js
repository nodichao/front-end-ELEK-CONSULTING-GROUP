//import { Footer } from "../../footer/Footer";
import "./Blog.css";

export function Blog(props) {
  //console.log(props.UserSize);
  return (
    <div
      id="Blog"
      className="Blog"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="inner-blog1">
        <h3>A la une</h3>
        <hr />
        <div className="BArticle1">
          <div className="BImage">
            <img src="../../../blogImage.jpg" alt="blogImage" />
          </div>
          <h2>Le métier de développeur web</h2>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,." "Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim    
          </p>
          <div className="BInteractions">
            <img src="/like.png" alt="like" />
            <img src="/comment.png" alt="comment" />
          </div>
        </div>
      </div>
      <div className="inner-blog2">
        <h3>A lire aussi</h3>
        <hr/>
        <div>
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        </p>
        </div>
        <div>
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        </p>
        </div>
        <div>
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        </p>
        </div>
        
      </div>
    </div>
  );
}
