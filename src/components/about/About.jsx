import React, { useRef, useEffect } from "react";
import "./about.css";
import { motion, useInView, useAnimation } from "framer-motion";

const text =
  "Avec une année d'expérience chez Tricky, j'ai acquis une solide expertise dans le développement d’applications front-end avec React. En parallèle, ma formation à la Wild Code School m'a permis de développer des compétences en DevOps et en backend, renforçant ainsi ma polyvalence technique. Mon parcours a confirmé mon intérêt pour le développement full-stack, où je peux concevoir des solutions complètes et efficaces.<br /><br />Curieuse, sérieuse et impliquée, j'aime travailler en équipe, partager mes connaissances et apprendre des autres. Mon objectif est de continuer à évoluer dans un environnement collaboratif où je peux contribuer de manière significative tout en développant mes compétences.";

const About = () => {
  const words = text.split(/(<br \/>| )/g);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="about">
      <h2>En quelques mots ...</h2>
      <div className="text" ref={ref}>
        <p>
          {words.map((word, i) => (
            <React.Fragment key={i}>
              {word === "<br />" ? (
                <br />
              ) : (
                <motion.span
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  initial={"hidden"}
                  animate={controls}
                  transition={{
                    duration: 0.4,
                    delay: i / 17,
                  }}
                >
                  {word}
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
