import React, { useEffect, useRef } from "react";
import "./skills.css";
import { motion, useAnimation, useInView } from "framer-motion";
// import { SiJavascript } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";

import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiNotion } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { FaSymfony } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  const softSkills = [
    "Curiosité",
    "Patience",
    "Tenacité",
    "Créativité",
    "Esprit d'équipe",
    "Autonomie",
  ];
  const hardSkills = [
    <RiJavascriptLine size={60} color="#D6B002" />,
    <SiReact size={60} color="#5ED2F3" />,
    <TbBrandRedux size={60} color="#7248B6" />,
    <SiTypescript size={60} color="#0076C6" />,
    <FaNodeJs size={60} color="#86BE02" />,
    <FaSymfony size={60} color="black" />,
    <BiLogoPhp size={60} color="#31648C" />,
    <BiLogoPostgresql size={60} color="#31648C" />,
    <GrMysql size={60} color="#41759B" />,
    <GrGraphQl size={60} color="#EF0097" />,
    <SiApollographql size={60} color="black" />,
    <SiSocketdotio size={60} color="black" />,
    <FaDocker size={60} color="#036BB0" />,
    <FaGitAlt size={60} color="#E84F31" />,
    <FiFigma size={60} color="black" />,
    <SiNotion size={60} color="black" />,
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
