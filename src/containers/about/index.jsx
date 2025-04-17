import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from 'react-icons/di';


const personalDetalis = [
  {
    label: "Name",
    value: "Vaishnavi",
  },
  {
    label: "Address",
    value: "Hyderabad, India",
  },
  {
    label: "Email",
    value: "Vangarivaishnavi52@gmail.com",
  },
  {
    label: "Contact No",
    value: "7997592404",
  },
  {
    label: "Languages	",
    value: "English, Telugu",
  },
];

const jobSummary = `I'm Vaishnavi Vangari, a passionate Frontend Developer skilled in building responsive web applications using React.js, HTML, CSS, and JavaScript.
I’ve developed several projects that demonstrate my proficiency in creating well-structured, visually appealing UI designs and providing users with interactive, seamless experiences. While front-end development is my core strength, I’m also expanding my skillset by learning back-end technologies like Node.js and MongoDB to better understand full-stack application development.
I’m eager to grow as a developer and contribute to dynamic teams where I can apply my skills, continue learning, and build impactful user experiences.`;

const About=()=>{
    return(
        <section id="about" className="about">
      <PageHeaderContent 
       headerText = "About Me"
       icon={<BsInfoCircleFill size={40} />}  
      />
        <div className="about__content">
          <div className="about__content__personalWrapper">
          <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                  transform: 'translateX(-900px)'
                }}
                end={{
                  transform: 'translatex(0px)'
                }}
                >
                 <h3>Frontend Developer</h3>
                 <p>{ jobSummary }</p>
          </Animate>

            <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                  transform: 'translateX(500px)'
                }}
                end={{
                  transform: 'translatex(0px)'
                }}
                >
                   <h3 className="personalInformationHeaderText">Personal Information</h3>
                <ul>
                {
               personalDetalis.map((item, i) => (
                 <li key={i}>
                     <span className="title">{item.label}</span>
                     <span className="value">{item.value}</span>
                   </li>
               ))
                }
                </ul>
             </Animate>
          </div>
          <div className="about__content__servicesWrapper">
          <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                  transform: 'translateX(600px)'
                }}
                end={{
                  transform: 'translatex(0px)'
                }}
                >
            <div className="about__content__servicesWrapper__innerContent">
            <div>
                <DiHtml5 size={60} color="var(--pink-theme-main-color)" />
             </div>
           <div>
                  <DiCss3 size={60} color="var(--pink-theme-main-color)" />
              </div>
              <div>
                  <DiJavascript1 size={60} color="var(--pink-theme-main-color)" />
             </div>
                    <div>
                   <DiReact size={60} color="var(--pink-theme-main-color)" />
                   </div>
            </div>  
            </Animate>     
                </div>     
        </div>
        </section>
    )
}

export default About;