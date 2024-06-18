import React, { useState } from "react";
import "./portfolio.css";
import { motion, AnimatePresence } from "framer-motion";

import { SliderData } from "./SliderData";

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);

  const [show, setShow] = useState(false);
  const [info, setinfo] = useState();

  // animation for list
  const container = {
    hidden: { opacity: 1, scale: 0 },
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
      opacity: 1,
    },
  };

  //  animation for  popup
  const variants = {
    visible: {
      scale: 1.1,
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
      y: -50,
      x: -100,
      cursor: "pointer",
      transition: { duration: 1, type: "spring" },
    },
    hidden: { scale: 1, opacity: 0 },
  };

  return (
    <section id="projects">
      <motion.ul
        style={{
          filter: show ? "blur(1px)" : "none",
        }}
        className="row d-flex   justify-content-center align-items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {SliderData.map((projectData) => (
          <motion.li
            layoutId={projectData.id}
            onClick={() => {
              setShow(!show);
              setinfo(projectData);
            }}
          >
            <motion.div>
              <motion.h2>{projectData.title}</motion.h2>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
      <AnimatePresence>
        {show && (
          <>
            <motion.div
              className="card "
              style={{
                position: "fixed",
                top: "30%",
                left: "40%",
              }}
              onClick={() => {
                setShow(!show);
              }}
              variants={variants}
              animate={show ? "visible" : "hidden"}
              exit={{ scale: 1, opacity: 0 }}
            >
              <img src={info.img} className="img-fluid" alt="" srcset="" />
              <h1 className="card-title"> {info.name}</h1>
              <p className="card-text">{info.dec}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
