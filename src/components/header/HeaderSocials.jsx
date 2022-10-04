import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaCodepen } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a title="LinkedIn" href="https://www.linkedin.com/in/petrucc1/" target="_blank">
        <BsLinkedin />
      </a>
      <a title="GitHub" href="https://github.com/petrucc1" target="_blank">
        <BsGithub />
      </a>
      <a title="CodePen" href="https://codepen.io/srh_petrucci" target="_blank">
        <FaCodepen />
      </a>
    </div>
  );
};

export default HeaderSocials;
