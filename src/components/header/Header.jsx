import React from "react";
import "./header.css";
import CTA from "./CTA.jsx";
import ME from "../../assets/mePict.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1>Valérie IELSCH</h1>
        <h5>Développeuse Fullstack</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="Valerie"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>{" "}
    </header>
  );
};

export default Header;
