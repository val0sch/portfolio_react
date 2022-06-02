import React from "react";
import CV from "../../assets/cv_valerie_ielsch.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Télécharger mon CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Me contacter
      </a>
    </div>
  );
};

export default CTA;
