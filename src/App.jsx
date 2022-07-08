import React, { Fragment, lazy, Suspense } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { SliderData } from "./components/portfolio/SliderData";
const ImageSlider = lazy(()=> import('./components/portfolio/ImageSlider'));

const App = () => {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      {/* <Portfolio /> */}
      <Suspense fallback={<div>Loading...</div>}>
            <ImageSlider slides={SliderData} />
         </Suspense>
      
      <Skills />
      <Contact />
    </Fragment>
  );
};

export default App;
