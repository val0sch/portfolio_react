import React, { useEffect, useRef } from "react";
import "./skills.css";
import { motion, useAnimation, useInView } from "framer-motion";
const Skills = () => {
  const softSkills = [
    "Curiosité",
    "Patience",
    "Tenacité",
    "Créativité",
    "Communication",
    "Autonomie",
  ];
  const hardSkills = [
    "Javascript",
    "React JS",
    "Node JS",
    "MySQL",
    "GitHub",
    "Notion",
    "Figma",
    "Express",
  ];

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
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section id="skills">
      <div className="skillsContainer" ref={ref}>
        <div className="softSkills">
          <h2>Soft Skills</h2>
          <motion.ul
            className="container"
            variants={container}
            initial={"hidden"}
            animate={controls}
          >
            {softSkills.map((skill, index) => (
              <motion.li key={index} className="item" variants={item}>
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="hardSkills">
          <h2>Hard Skills</h2>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {hardSkills.map((skill, index) => (
              <motion.li key={index} className="item" variants={item}>
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
export default Skills;
