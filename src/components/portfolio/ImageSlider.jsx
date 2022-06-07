import React, { useState } from "react";
import "./imageSlider.css";
import { SliderData } from "./SliderData";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const ImageSlider = ({ slides }) => {
  // const [current, setCurrent] = useState(0);
  // const lenght = slides.lenght;

  return (
    <section id="slider">
      <MdOutlineArrowBackIos className="icons icon-left" />
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="image projet" className="photo"></img>;
      })}
      <MdOutlineArrowForwardIos className="icons" />
    </section>
  );
};

export default ImageSlider;
