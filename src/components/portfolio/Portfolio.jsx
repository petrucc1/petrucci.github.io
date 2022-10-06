import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/nlw-esports-preview-desktop.png";
import IMG2 from "../../assets/social-tree-preview-desktop.png";
import IMG3 from "../../assets/ogma-preview-mobile.png";
import IMG4 from "../../assets/ada-lovelace-preview-desktop.png";
import IMG5 from "../../assets/survey-form-preview-desktop.png";
import IMG6 from "../../assets/product-card-desktop-preview.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "NLW eSports",
    github: "https://github.com/petrucc1/nlw-esports-web",
    demo: "https://nlw-esports-web-eight.vercel.app",
  },
  {
    id: 1,
    image: IMG2,
    title: "Árvore social",
    github: "https://github.com/petrucc1/social-tree",
    demo: "https://social-tree-gamma.vercel.app/",
  },
  {
    id: 1,
    image: IMG3,
    title: "Cervejaria Ogma - Landing Page",
    github: "https://github.com",
    demo: "https://ogma-landing-page.vercel.app/",
  },
  {
    id: 1,
    image: IMG4,
    title: "Ada Lovelace - Tribute Page",
    github: "https://codepen.io/srh_petrucci/pen/qBPWMEy",
    demo: "https://codepen.io/srh_petrucci/full/qBPWMEy",
  },
  {
    id: 1,
    image: IMG5,
    title: "Formulário de Pesquisa",
    github: "https://codepen.io/srh_petrucci/pen/jOGEPRv",
    demo: "https://codepen.io/srh_petrucci/full/jOGEPRv",
  },
  {
    id: 1,
    image: IMG6,
    title: "Cartão de visualização de um produto",
    github: "https://github.com/petrucc1/product-preview-card-component",
    demo: "https://product-preview-card-component-wheat-chi.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Meus projetos</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
