import React from "react";
import "./header.css";
import CTA from "./CTA.jsx";
import ME from "../../assets/mePict.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Valérie IELSCH</h1>
        <h5 className="text-light">Fullstack Developper</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="Valerie"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>{" "}
    </header>
  );
};

export default Header;
