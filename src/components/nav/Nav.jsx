import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        title="Início"
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        title="Sobre"
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FiUser />
      </a>
      <a
        title="Hard skills"
        href="#experience"
        onClick={() => {
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        title="Serviços"
        href="#services"
        onClick={() => {
          setActiveNav("#services");
        }}
        className={activeNav === "#services" ? "active" : ""}
      >
        <BiBriefcaseAlt2 />
      </a>
      <a
        title="Meus projetos"
        href="#portfolio"
        onClick={() => {
          setActiveNav("#portfolio");
        }}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BiCodeAlt />
      </a>
      <a
        title="Depoimentos"
        href="#testimonials"
        onClick={() => {
          setActiveNav("#testimonials");
        }}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <HiUserGroup />
      </a>
      <a
        title="Contato"
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
