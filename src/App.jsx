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
          <button>Home</button>
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
     data-aos-duration="5000"
     id="contacts">
          <h1 className="nocontent outline">Contatos</h1>
            <ul id='contact'>
              <AttentionSeeker effect="bounce">
                <li><a href="https://www.linkedin.com/in/nathan-de-assis-crevelin-1a0471256/" target="_blank" className="linkedin" rel="noreferrer"> <FaLinkedin /></a></li>
                <li><a href="https://github.com/eu-neita" target="_blank" className="github" rel="noreferrer"><FaGithubSquare /></a></li>
                <li><a href="mailto:neitass.music@gmail.com" className="email"><MdEmail /></a></li>
              </AttentionSeeker>
            </ul>
        </div>
        <p> .</p>
        <p> .</p>
        <p>. </p>
        <p>. </p>
        <p> .</p>
      </div>
  )
}

export default App
