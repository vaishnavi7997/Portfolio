import React from 'react'
import { useNavigate} from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  }
  return (
    <section id="home" className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Vaishnavi
          <br />
          Frontend Developer
        </h1>
      </div>
      <Animate 
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateY(550px)'
      }}
      end={{
        transform: 'translatex(0px)'
      }}
      >
      <div className='home__contact-me'>
        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
        <div className='home__social-links'>
            <a href="https://github.com/vaishnavi7997" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} /> 
            </a>
            <a href="https://www.linkedin.com/in/vaishnavi7997/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} /> 
            </a>
          </div>
      
      </Animate>    
    </section>
  )
}

export default Home
