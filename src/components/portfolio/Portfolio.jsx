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
      <div id="carousel">
        <Carousel>
          <div className="image">
            <img src={mixDrink} />
            <div className="description">
              <p>
                <strong>Mix and Drink</strong> - Wild Code School
                <br />
                (cocktails populaires, barre de recherche et recherche
                aléatoire)
                <br />
                Appel de l'API cocktailDB, site construit avec la librairie
                REACT
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
            <img src={hackaton} />
            <div className="description">
              <p>
                <strong>Hackathon n°1 </strong> - Wild Code School <br />{" "}
                Consommer une API avec REACT <br /> 36h pour réaliser un site
                sur le thème de l'écologie (économie circulaire)
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
            <img src={todolist} />
            <div className="description">
              <p>
                <strong>To Do List</strong> <br />
                Réalisation d'une "to do list" avec la librairie REACT <br />
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
            <img src={brasserie} />
            <div className="description">
              <p>
                <strong>Brasserie Outsiders</strong>
                <br />
                Projet n°1 - Wild Code School <br />
                Site vitrine en utilisant les languages HTML et CSS
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
