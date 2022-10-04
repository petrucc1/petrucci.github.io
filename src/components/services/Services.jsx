import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h2>Serviços</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Front-end</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing pages</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Multipages</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Sites no WordPress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lojas no WordPress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsividade</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blogs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Portfólios</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Back-end</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publicar sites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Guardar e resgatar dados com SQL</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Intregações de APIs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Configurar envio de e-mails</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
