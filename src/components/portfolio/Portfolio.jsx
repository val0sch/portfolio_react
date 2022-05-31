import React from "react";
import "./portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import hackaton from "../../assets/hackaton1.png";
import mixDrink from "../../assets/mix&drink.png";
import todolist from "../../assets/todolist.png";
import brasserie from "../../assets/brasserie.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div id="container-carousel">
        <Carousel useKeyboardArrows>
          <div className="box-img-desc">
            <img src={mixDrink} alt="project picture" />
            <div className="description">
              <p>
                <strong>Mix and Drink</strong> Projet 2-{" "}
                <em>Wild Code School</em>
                <br />
                API cocktailDB et librairie REACT
                <br />
                barre de recherche, bouton Random et lien vers les cocktails
                populaires
              </p>

              <a
                href="https://github.com/val0sch/MixAndDrink_Projet2"
                className="btn2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://github.com/val0sch/MixAndDrink_Projet2"
                className="btn2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visiter le site
              </a>
            </div>
          </div>

          <div className="image">
            <img src={hackaton} alt="project picture" />
            <div className="description">
              <p>
                <strong>Hackathon n°1 </strong> : 36h -{" "}
                <em>Wild Code School</em> <br /> Consommer une API avec REACT{" "}
                <br /> site sur le thème de l'économie circulaire
              </p>

              <a
                href="https://github.com/val0sch/hackaton1"
                className="btn2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://val0sch.github.io/hackaton1/"
                className="btn2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visiter le site
              </a>
            </div>
          </div>
          <div className="image">
            <img src={todolist} alt="project picture" />
            <div className="description">
              <p>
                <strong>To Do List</strong> <br />
                Librairie REACT <br />
                Utilisation des Hooks (useState, useEffect)
              </p>

              <a
                href="https://github.com/val0sch/To-Do-List"
                className="btn2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://val0sch.github.io/To-Do-List/"
                className="btn2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visiter le site
              </a>
            </div>
          </div>
          <div className="image">
            <img src={brasserie} alt="project picture" />
            <div className="description">
              <p>
                <strong>Brasserie Outsiders</strong> Projet 1 -{" "}
                <em>Wild Code School</em> <br />
                Site vitrine d'un restaurant fictif
                <br />
                HTML et CSS
              </p>

              <a
                href="https://github.com/val0sch/projetOutsidersBrasserie"
                className="btn2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://val0sch.github.io/projetOutsidersBrasserie/"
                className="btn2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visiter le site
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
