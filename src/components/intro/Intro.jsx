import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.jpeg'




const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="George kamakia" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            
Having worked for 1+ years in web development, I specialize in crafting websites that are interactive, engaging, and adaptable across different devices, all thanks to my expertise in Agile methodologies. In my toolkit, I wield proficiency in various tools and technologies that form the backbone of modern web development. I'm adept in Linux environments, enabling efficient workflows. Navigating AWS Cloud services comes naturally to me, allowing for scalable and reliable web solutions.

My skills extend to using React, a powerful framework that brings dynamism to user interfaces, while Django empowers me to create robust and scalable web applications. I handle data efficiently through PostgreSQL, ensuring smooth and secure management. Git/GitHub serves as my trusty companion for version control, Python fuels my backend operations, and HTML/CSS, my artistic palette, paints visually appealing designs.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
