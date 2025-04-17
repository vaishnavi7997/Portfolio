import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../images/img1.jpg';
import ImageTwo from '../../images/img2.jpg';
import ImageThree from '../../images/img3.jpg';
import ImageFour from '../../images/img4.jpg';
import ImageFive from '../../images/img5.jpg';
import ImageSix from '../../images/img6.jpg';
import ImageSeven from '../../images/img7.jpg';
import ImageEight from '../../images/img8.jpg';
import ImageNine from '../../images/img9.jpg';
import ImageTen from '../../images/img10.jpg';

import './styles.scss';

const portfolioData = [
  {
    id: 1,
    name: "To-Do App",
    image: ImageOne,
    github: "https://github.com/vaishnavi7997/React-To-Do-List-Project",
    live: "https://react-to-do-list-project-gamma.vercel.app/"
  },
  {
    id: 2,
    name: "Fresh Cart Grocery",
    image: ImageTwo,
    github: "https://github.com/vaishnavi7997/Fresh-cart-project",
    live: "https://fresh-cart-webpage-practice.netlify.app/"
  },
  {
    id: 3,
    name: "Tote Bag Ecommerce",
    image: ImageThree,
    github: "https://github.com/vaishnavi7997/Tote-Bag-Project",
    live: "https://e-commerce-tote-bag-project.netlify.app/"
  },
  {
    id: 4,
    name: "IT Center",
    image: ImageFour,
    github: "https://github.com/vaishnavi7997/IT-Project",
    live: "https://it-website-project.netlify.app/"
  },
  {
    id: 5,
    name: "Lottery Game",
    image: ImageFive,
    github: "https://github.com/vaishnavi7997/Lottery-Game-javascript",
    live: "https://lottery-game-javascript.netlify.app/"
  },
  {
    id: 6,
    name: "3D Image Gallery",
    image: ImageSix,
    github: "https://github.com/vaishnavi7997/-Image-gallery-javascript-project",
    live: "https://image-gallery-javascript-project.netlify.app/"
  },
  {
    id: 7,
    name: "Calculator",
    image: ImageSeven,
    github: "https://github.com/vaishnavi7997/Calculator-Project",
    live: "https://javascript-project-calculator.netlify.app/"
  },
  {
    id: 8,
    name: "Vivlio Store",
    image: ImageEight,
    github: "https://github.com/vaishnavi7997/Books-Landing-Page-Project",
    live: "https://book-landing-project.netlify.app/"
  },
  {
    id: 9,
    name: "Weather App",
    image: ImageNine,
    github: "https://github.com/vaishnavi7997/Weather-App",
    live: "https://weather-app-three-eta-17.vercel.app/"
  },
  {
    id: 10,
    name: "Music Player",
    image: ImageTen,
    github: "https://github.com/vaishnavi7997/Music-player-JavaScript-project",
    live: "https://music-player-tau-three.vercel.app/"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        {portfolioData.map(({ id, name, image, github, live }) => (
          <div key={id} className="portfolio__card">
            <img src={image} alt={name} className="portfolio__image" />
            <div className="portfolio__overlay">
              <h3>{name}</h3>
              <div className="portfolio__links">
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={live} target="_blank" rel="noopener noreferrer">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
