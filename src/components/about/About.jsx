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
            Meu nome é Sarah Petrucci, tenho 21 anos e sou desenvolvedora Full Stack. Me importo muito com a acessibilidade e a usabilidade das aplicações, tenho grande interesse em projetos com soluções sustentáveis. Já trabalhei como freelancer front-end na Workana, o que me proporcionou diversas experiências práticas.
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
