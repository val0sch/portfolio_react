import React, { useRef, useEffect } from "react";
import "./about.css";
import { motion, useInView, useAnimation } from "framer-motion";

const text =
  "Je glisse un orteil dans le bassin du développement Web via une initiation openClassRoom et me voilà mouillée jusqu'au cou en formation 5 mois à la Wild Code School. Je bois parfois la tasse mais je ne coule pas. Cette formation est intensive mais renforce ma persévérance. On aborde une belle dose de concepts, et on se serre les coudes. La Wild c'est aussi un accès à une formation professionnelle qui nous permet de réaliser notre dernier projet avec un client réel.<br />Cette aventure se termine bientôt, et avant le grand plongeon, j'aimerais poursuivre mon apprentissage via un contrat d'alternance dans une entreprise.";

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
