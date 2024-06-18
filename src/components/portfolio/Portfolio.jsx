import React, { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";

import noImage from "../../assets/noImage.png";

import { SliderData } from "./SliderData";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const [show, setShow] = useState(false);
  const [info, setinfo] = useState();

  // animation for list
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      cursor: "pointer",
      opacity: 1,
    },
  };

  //  animation for  popup
  const variants = {
    visible: {
      scale: 1.1,
      transition: { duration: 1, type: "spring" },
    },
    hidden: { scale: 1, opacity: 0 },
  };

  return (
    <section id="projects">
      <h2>Projets</h2>
      <div className="projectsContainer" ref={ref}>
        <motion.ul
          style={{
            filter: show ? "blur(3px)" : "none",
          }}
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {SliderData.map((projectData) => (
            <motion.li
              layout
              onClick={() => {
                setShow(!show);
                setinfo(projectData);
              }}
              variants={item}
            >
              <motion.h2>{projectData.title}</motion.h2>
              {window.innerWidth > 800 && (
                <motion.img
                  src={
                    projectData.images !== null
                      ? projectData.images[0]
                      : noImage
                  }
                  alt="website project image"
                  className={
                    projectData.images !== null ? "" : "noImageAvailable"
                  }
                ></motion.img>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <AnimatePresence>
        {show && (
          <>
            <motion.div
              className="popup"
              variants={variants}
              animate={show ? "visible" : "hidden"}
              exit={{ scale: 1, opacity: 0 }}
            >
              <IoIosCloseCircle
                size={25}
                onClick={() => {
                  setShow(!show);
                }}
                className="closeIcon"
              />

              <h1> {info.title}</h1>
              <p>{info.description}</p>
              {info.url !== null && (
                <a href={info.url} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">Site web</button>
                </a>
              )}
              {info.repo !== null && (
                <a href={info.repo} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">Github</button>
                </a>
              )}

              {info.repo2 && (
                <a href={info.repo2} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">Github 2</button>
                </a>
              )}

              <div className="imagesBox">
                {info.images !== null ? (
                  info.images.map((image) => (
                    <img src={image} alt="website project zoom" srcset="" />
                  ))
                ) : (
                  <img src={noImage} alt="not available" srcset="" />
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
