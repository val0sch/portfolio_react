// import React, { useState } from "react";
// import "./imageSlider.css";
// import { SliderData } from "./SliderData";
// import {
//   MdOutlineArrowForwardIos,
//   MdOutlineArrowBackIos,
// } from "react-icons/md";
// import Slide from "./Slide";

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const handleNextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };
//   const handlePrevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section id="slider">
//       <MdOutlineArrowBackIos
//         className="icons icon-left"
//         onClick={handlePrevSlide}
//       />
//       <MdOutlineArrowForwardIos className="icons" onClick={handleNextSlide} />
//       {SliderData.map((slide, index) => {
//         return <Slide props={slide} index={index} current={current} />;
//       })}
//     </section>
//   );
// };

// export default ImageSlider;
