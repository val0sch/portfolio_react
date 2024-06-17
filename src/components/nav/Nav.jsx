import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { CgUserlane } from "react-icons/cg";
import { BsFillGearFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { IoSend } from "react-icons/io5";

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
              className="icon"
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
              className="icon"
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
              to="skills"
              className="icon"
            >
              <BsFillGearFill size={28} />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              duration={50}
              spy={true}
              to="contact"
              className="icon"
            >
              <IoSend size={26} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
