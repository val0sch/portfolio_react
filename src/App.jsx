// import React, { lazy, Suspense } from "react";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
// import { SliderData } from "./components/portfolio/SliderData";
// const ImageSlider = lazy(() => import("./components/portfolio/ImageSlider"));
import "./app.css";

const App = () => {
  return (
    <main className="App">
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
};

export default App;
