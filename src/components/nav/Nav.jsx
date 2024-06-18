import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { CgUserlane } from "react-icons/cg";
import { BsFillGearFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { IoSend } from "react-icons/io5";
import { IoFolder } from "react-icons/io5";

import React from "react";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              duration={50}
              to="home"
            >
              <AiFillHome size={30} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              duration={50}
              to="about"
            >
              <CgUserlane size={30} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              duration={50}
              to="projects"
            >
              <IoFolder size={30} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              duration={50}
              to="skills"
            >
              <BsFillGearFill size={30} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              duration={50}
              spy={true}
              to="contact"
            >
              <IoSend size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
