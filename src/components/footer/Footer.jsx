import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
     
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/george-kamakia" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/0724654276" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://github.com/engkamakia" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; george_kamakia 2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer