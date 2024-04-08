import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <hr />
      <div className="contact-icon"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      >
        <a href="https://www.instagram.com/allabout_raj/" target="_blank" className="items">
          <FaInstagram className="icons" />
        </a>
        <a href="mailto:manish.11805306@gmail.com" target="_blank" className="items">
          <SiGmail className="icons"/>
        </a>
        <a href="https://www.linkedin.com/in/manish-kumar-a50824169/" target="_blank" className="items">
          <CiLinkedin className="icons"/>
        </a>
        <a href="https://github.com/allaboutraj" target="_blank" className="items">
        <FaGithub className="icons"/>
        </a>
        <a href="https://twitter.com/manishgupta9507" target="_blank" className="items">
        <FaSquareXTwitter className="icons"/>
        </a>
      </div>
    </>
  );
};

export default Contact;
