import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Merci pour votre mail",
      text: "Je vous réponds au plus vite!",
      icon: "success",
      showConfirmButton: false,
      timer: 1800,
    });

    emailjs
      .sendForm(
        "service_tfg2zej",
        "template_h53t3ax",
        form.current,
        "5NZVBYk7GV2tzzM0L"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Prenez contact avec moi!</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Nom et prénom" required />
        <input type="email" name="email" placeholder="adresse mail" required />
        <textarea
          type="message"
          row="7"
          name="message"
          placeholder="Votre message"
          required
        />
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>

      <div id="footer">
        <p>©Copyright 2022 / Valérie Ielsch </p>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/valerie-ielsch/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/val0sch" target="_blank" rel="noreferrer">
            <BsGithub /> Github
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;
