import React from "react";
import "./home.css";
import CTA from "./CTA.jsx";
import ME from "../../assets/mePict.png";

const Home = () => {
  return (
    <section id="home">
      <div className="container home_container">
        <h5>Bonjour, je suis</h5>
        <h1>Valérie IELSCH</h1>
        <h5>Développeuse Fullstack</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="Valerie"></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
