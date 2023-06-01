import { useEffect } from 'react'
import { Fade , Slide, AttentionSeeker } from "react-awesome-reveal";
import myPhoto from "./images/foto_perfil.png";
import desci from "./images/descri.png"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {MdEmail} from 'react-icons/md'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id='allThinks'>
      <div>
      </div>
      <div className="background">
      <div id='buttons' data-aos="zoom-out-down" data-aos-duration="3000">
          <button>Projetos</button>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="3000" className="aboutme">
        <img src={myPhoto} alt="my photo, i am web future web developer" id="photo" />
          <div id='apresentation' >
            <Slide triggerOnce cascade>
              <h3 className="title-about">~Olá</h3>
              <p id="present">Me chamo Nathan mas pode me chamar de neita!</p>
            </Slide>
            <Slide triggerOnce cascade delay={ 1500 } direction='right' duration={ 3000 }>
                <img src={desci} alt="descrição sobre mim" id="description" />
            </Slide>
          </div>
        </div>
      </div>

      <div data-aos="fade-left"
     data-aos-anchor-placement="bottom-bottom"
     id="contacts">
          <h1 className="nocontent outline">Contatos</h1>
            <ul id='contact'>
              <AttentionSeeker effect="bounce" delay={ 400 }>
                <li><a href="https://www.linkedin.com/in/nathan-de-assis-crevelin-1a0471256/" target="_blank" className="linkedin" rel="noreferrer"> <FaLinkedin /></a></li>
                <li><a href="https://github.com/eu-neita" target="_blank" className="github" rel="noreferrer"><FaGithubSquare /></a></li>
                <li><a href="mailto:neitass.music@gmail.com" className="email"><MdEmail id='MdEmail' /></a></li>
              </AttentionSeeker>
            </ul>
        </div>

      <div data-aos="fade-right"
     data-aos-anchor-placement="bottom-bottom"
     id="Technologies">
          <h1 className="nocontent outline">Tecnologias com que trabalho</h1>
            <ul id='Technologies-icon'>
            <Fade cascade damping={0.5}>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a></li>
                <li><a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="50" height="50" alt="Git" /></a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="50" height="50" alt="HTML5" /></a></li>
                <li><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" /></a></li>
                <li><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="50" height="50" alt="Bootstrap" /></a></li>
                <li><a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="50" height="50" alt="Redux" /></a></li>
                <li><a href="https://mui.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="50" height="50" alt="Material UI" /></a></li>
                <li><a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="50" height="50"/> </a></li>
              </Fade>
            </ul>
        </div>
      </div>
  )
}

export default App
