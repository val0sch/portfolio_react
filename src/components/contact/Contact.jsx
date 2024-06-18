import React from "react";
import "./contact.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contactContainer">
        <h2>Contact</h2>
        <div className="socials">
          <ul>
            <li>
              <a
                className="keyboard"
                href="mailto:valerie.ielsch@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdAlternateEmail size={30} /> Email
              </a>
            </li>
            <li>
              <a
                className="keyboard"
                href="https://www.linkedin.com/in/valerie-ielsch/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={30} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                className="keyboard"
                href="https://github.com/val0sch"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={30} /> Github
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="footer">
        <p>©Copyright 2024 / Valérie Ielsch </p>
      </div>
    </section>
  );
};

export default Contact;
