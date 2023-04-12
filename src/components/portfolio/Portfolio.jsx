import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/photopix.png";
import IMG2 from "../../assets/guess.png";
import IMG3 from "../../assets/bootstrap.png";
import IMG4 from "../../assets/tic.png";
import IMG5 from "../../assets/todoApp.png";
import IMG6 from "../../assets/speech.png";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "photopiX Website",
    github: "https://github.com/soulpredator0/PhotopiX",
    demo: "https://soulpredator0.github.io/PhotopiX/",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Guess The Number",
    github: "https://github.com/soulpredator0/GuessGame",
    demo: "https://soulpredator0.github.io/GuessGame/",
  },
  {
    id: 3,
    Image: IMG3,
    title: "Responsive Bootstrap",
    github: "https://github.com/soulpredator0/bootstrap-website",
    demo: "https://soulpredator0.github.io/bootstrap-website/",
  },
  {
    id: 4,
    Image: IMG4,
    title: "Tic Tac Toe",
    github: "https://github.com/soulpredator0/tic-tac-toe",
    demo: "https://soulpredator0.github.io/tic-tac-toe/",
  },
  {
    id: 5,
    Image: IMG5,
    title: "Todo App",
    github: "https://github.com/soulpredator0/React-Todo",
    demo: "https://react-todo-snowy-five.vercel.app",
  },
  {
    id: 6,
    Image: IMG6,
    title: "Speech-Recogination",
    github: "https://github.com/soulpredator0/speech-recogination",
    demo: "https://speech-recogination-fynhzkmm9-soulpredator0.vercel.app/",
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, Image, title, github, demo }) => {
          return(
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank">
                Live Project
              </a>
            </div>
          </article>
          )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
