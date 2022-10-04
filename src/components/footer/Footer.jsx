import React from "react";
import "./footer.css";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Sarah Petrucci
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Hard skills</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#portfolio">Meus projetos</a>
        </li>
        <li>
          <a href="#testimonials">Depoimentos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a title="LinkedIn" href="https://instagram.com">
          <FiLinkedin />
        </a>
        <a title="GitHub" href="https://github.com/petrucc1">
          <FaGithub />
        </a>
        <a title="CodePen" href="https://twitter.com">
          <IoLogoCodepen />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sarah Petrucci. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
