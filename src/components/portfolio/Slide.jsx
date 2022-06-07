import React from "react";

const Slide = ({ props, current, index }) => {
  return (
    <div className={index === current ? "slide active" : "slide"} key={index}>
      {index === current && (
        <div id="carousel">
          <img src={props.image} alt="image projet" className="photo"></img>
          <div className="content">
            <h3>{props.title}</h3>
            <h3>{props.subtitle}</h3>
            <p>{props.description}</p>
            <a href={props.github}>Github</a>{" "}
            <a href={props.url}>Visiter le site</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
