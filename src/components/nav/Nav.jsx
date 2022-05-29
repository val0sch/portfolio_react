import React, { useState } from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { CgUserlane } from "react-icons/cg";
import { RiFolder5Fill } from "react-icons/ri";
import { BsFillGearFill } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <CgUserlane />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiFolder5Fill />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BsFillGearFill />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <SiGooglemessages />
      </a>
    </nav>
  );
};

export default Nav;
