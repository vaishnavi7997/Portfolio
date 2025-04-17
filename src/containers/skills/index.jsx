import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";

import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiGit,
  DiGithub,
} from "react-icons/di";

import {
  SiRedux,
  SiJquery,
  SiNetlify,
  SiVercel
} from "react-icons/si";

import { FaCode } from "react-icons/fa";
import './styles.scss';


const Skills = () => {
  return (
    <section id="skills" className="skills">
  <PageHeaderContent 
    headerText="My Skills"
    icon={<BsInfoCircleFill size={40} />} 
  />

  <div className="skills-wrapper">
    
    <div className="skills-column">
      <div className="skills-category">
        <h3 className="category-title">Frontend & Styling</h3>
        <div className="skills-grid">
          <div className="skill-card"><DiHtml5 className="skill-icon" /><p className="skill-label">HTML5</p></div>
          <div className="skill-card"><DiCss3 className="skill-icon" /><p className="skill-label">CSS3</p></div>
          <div className="skill-card"><DiJavascript1 className="skill-icon" /><p className="skill-label">JavaScript</p></div>
          <div className="skill-card"><DiReact className="skill-icon" /><p className="skill-label">React.js</p></div>
          <div className="skill-card"><SiJquery className="skill-icon" /><p className="skill-label">jQuery</p></div>
          <div className="skill-card"><DiBootstrap className="skill-icon" /><p className="skill-label">Bootstrap</p></div>
        </div>
      </div>
    </div>

    <div className="skills-column">
      <div className="skills-category">
        <h3 className="category-title">Tools & Deployment</h3>
        <div className="skills-grid">
          <div className="skill-card"><DiGit className="skill-icon" /><p className="skill-label">Git</p></div>
          <div className="skill-card"><DiGithub className="skill-icon" /><p className="skill-label">GitHub</p></div>
          <div className="skill-card"><FaCode className="skill-icon" /><p className="skill-label">VS Code</p></div>
          <div className="skill-card"><SiNetlify className="skill-icon" /><p className="skill-label">Netlify</p></div>
          <div className="skill-card"><SiVercel className="skill-icon" /><p className="skill-label">Vercel</p></div>
        </div>
      </div>
    </div>

  </div>
</section>
  );
};

export default Skills;
