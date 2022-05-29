import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </Fragment>
  );
};

export default App;
