import React from "react";
import "./about.css";
import ME from "../../assets/undraw_software_engineer_re_tnjc.svg";

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
          Meu nome é Sarah Petrucci, 21 anos e amo ser desenvolvedora Full Stack. Me importam a acessibilidade e usabilidade das aplicações, tenho grande interesse em projetos com soluções sustentáveis. Trabalhei como freelancer front-end na Workana, entre outros, porém agora tenho como objetivo encontrar algo, onde eu possa não só desenvolver minhas habilidades, como interagir e colaborar num projeto de crescimento contínuo, para todas as partes envolvidas.
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
