import "./Nous.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEnvelope,faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";

export function Nous() {
  return (
    <>
      <div id="Nous" className="Nous">
        <h3>Nous contacter</h3>
        <div className="email">
          <p>
            <img src="../../../email.png" alt="email" />
            <span>&nbsp; josephhenrinodichao@gmail.com</span>
          </p>
        </div>
        <div className="addcell">
          <p>
            <img src="../../../telephone.png" alt="telephone" />
            <span>+221 77 525 81 45</span>
          </p>
          <p>
            <img src="../../../position.png" alt="position" />
            <span>Thiaroye azur, sepco 1, n 128</span>
          </p>
        </div>
      </div>
    </>
  );
}
