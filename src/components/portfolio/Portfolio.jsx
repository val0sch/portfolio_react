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
                <strong>Mix and Drink</strong> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Asperiores sequi quisquam
                temporibus vero nemo et perspiciatis minus natus reiciendis
                cumque, dolorem qui at.
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
                Site
              </a>
            </div>
          </div>
          <div className="image">
            <img src={hackaton} />
            <div className="description">
              <p>
                <strong>Hachathon n°1</strong> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Asperiores sequi quisquam
                temporibus vero nemo et perspiciatis minus natus reiciendis
                cumque, dolorem qui at.
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
                Site
              </a>
            </div>
          </div>
          <div className="image">
            <img src={todolist} />
            <div className="description">
              <p>
                <strong>To do list React</strong> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Asperiores sequi quisquam
                temporibus vero nemo et perspiciatis minus natus reiciendis
                cumque, dolorem qui at.
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
                Site
              </a>
            </div>
          </div>
          <div className="image">
            <img src={brasserie} />
            <div className="description">
              <p>
                <strong>Brasserie Outsiders</strong> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Asperiores sequi quisquam
                temporibus vero nemo et perspiciatis minus natus reiciendis
                cumque, dolorem qui at.
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
                Site
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
