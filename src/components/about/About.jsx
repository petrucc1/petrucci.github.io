import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>5 meses</h5>
              <small>Trabalhando</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>1</h5>
              <small>Hackathon</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>13</h5>
              <small>Projetos</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            necessitatibus fugiat explicabo quas provident libero dicta,
            voluptates dolorum eveniet dignissimos blanditiis, mollitia ut ipsum
            quo vel natus. Aperiam, blanditiis voluptatum!
          </p>
          <a href="#contact" className="btn btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
