import React from "react";
import "./about.css";
import ME from "../../assets/undraw_software_engineer_re_tnjc.svg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>Sobre</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div>
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
