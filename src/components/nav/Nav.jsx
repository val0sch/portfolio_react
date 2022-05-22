import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { CgUserlane } from "react-icons/cg";
import { RiFolder5Fill } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiFillHome />
      </a>
      <a href="#about">
        <CgUserlane />
      </a>
      <a href="#experience">
        <RiFolder5Fill />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <SiGooglemessages />
      </a>
    </nav>
  );
};

export default Nav;
