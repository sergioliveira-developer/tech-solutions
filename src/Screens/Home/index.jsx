import { useState } from 'react';

import {
  Button,
  InformationTop,
  Input,
  Logo,
  SocialMedia,
  QuestionBoard,
  Footer,
} from '../../components';

import {
  ContainerBody,
  ContainerTop,
  GameCreator,
  GamingCreation,
  HamburgerIcon,
  Header,
  MainContainer,
  MenuLinks,
  SectionDescription,
  SectionInformations,
} from './styles';

import ArrowForward from '../../../public/arrow-forward.svg';
import UserExperience from '../../../public/user-experience.png';
import EnhancedEducation from '../../../public/enhanced-education.svg';
import TrainingSimulation from '../../../public/training-simulation.svg';
import ArrowForward2 from '../../../public/arrow-forward2.svg';
import BlueStar from '../../../public/blue-star.svg';
import Explore from '../../../public/explore.svg';
import Glasses from '../../../public/glasses.png';
import Arcle from '../../../public/arcle.svg';
import PeoplesViews from '../../../public/peoples-views.svg';
import Creator from '../../../public/creator.png';
import Coments from '../../../public/coments.svg';
import Line3 from '../../../public/line-3.svg';

import { PageCardsGames } from '../PageCards';

import { IoClose, IoMenu } from 'react-icons/io5';

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Função para abrir/fechar o menu
  };

  // const navLinks = [
  //   { name: 'HOME', to: 'home' },
  //   { name: 'ABOUT ME', to: 'aboutme' },
  //   { name: 'PROJECTS', to: 'projects' },
  //   { name: 'SKILLS', to: 'skills' },
  //   { name: 'CONTACT', to: 'contact' },
  // ];

  return (
    <>
      <SectionInformations>
        <MainContainer>
          <Header>
            {/* Menu Links (mostrado ou escondido com base no estado) */}
            <MenuLinks isopen={menuOpen}>
              <IoClose className="close-icon" size={28} onClick={toggleMenu} />

              {['Home', 'Catalog', 'Contact', 'Features'].map((text) => (
                <a
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar em um link
                >
                  {text}
                </a>
              ))}
            </MenuLinks>

            <HamburgerIcon isopen={menuOpen} onClick={toggleMenu}>
              {!menuOpen ? <IoMenu size={28} /> : ''}
              {/* Mostra o ícone de hambúrguer quando o menu está fechado */}
            </HamburgerIcon>

            <div className="logo">
              <Logo />
            </div>

            <div className="search">
              <Input placeholder="Search games & products..." />
            </div>
          </Header>

          <ContainerTop>
            <div className="hero-text">
              <InformationTop subtitle="Virtual Headsets" />

              <div className="container-buttons">
                <Button theme="blue" type="button">
                  Visit Sttore <img src={ArrowForward} alt="arrow-forward" />
                </Button>

                <Button type="button">
                  <img src={Explore} alt="expore-icon" /> Explore
                </Button>
              </div>

              <div className="follow-us">
                <h4>FOLLOW US</h4>
                <SocialMedia />
              </div>
            </div>

            <div className="glasses-using">
              <div className="user-experience">
                <img src={UserExperience} />
                <img src={Line3} alt="line3" />
              </div>

              <div className="icons">
                <div>
                  <img src={EnhancedEducation} alt="icon" />
                  <span>Enhanced Education</span>
                </div>

                <div>
                  <img src={TrainingSimulation} alt="icon" />
                  <span>Training and Simulation</span>
                </div>
              </div>
            </div>
          </ContainerTop>
        </MainContainer>
      </SectionInformations>

      <SectionDescription>
        <MainContainer>
          <div className="content">
            <div className="image">
              <img
                className="virtual-glasses"
                src={Glasses}
                alt="virtual-glasses"
              />
              <img className="arcle-icon" src={Arcle} alt="arcle-background" />
            </div>

            <ContainerBody>
              <h1>Our Virtual Headsets Shine with Unique Features!</h1>

              <div className="infos">
                <div className="high-resolution">
                  <img src={BlueStar} />
                  High-resolution OLED or LCD screens: Provide sharp and clear
                  visuals.
                </div>

                <div className="refresh-rate">
                  <img src={BlueStar} />
                  Refresh rate: Higher refresh rates reduce motion sickness and
                  provide.
                </div>

                <div className="inside-tracking">
                  <img src={BlueStar} />
                  Inside-out tracking: Built-in sensors (cameras or other
                  sensors).
                </div>

                <div className="eye-tracking">
                  <img src={BlueStar} />
                  Eye tracking: Monitors the movement of the users eyes,
                  allowing for more.
                </div>

                <div className="high-resolution1">
                  <img src={BlueStar} />
                  High-resolution OLED or LCD screens: Provide sharp and clear
                  visuals.
                </div>

                <div className="refresh-rate1">
                  <img src={BlueStar} />
                  Refresh rate: Higher refresh rates reduce motion sickness and
                  provide.
                </div>
              </div>
            </ContainerBody>
          </div>
        </MainContainer>
      </SectionDescription>

      <GamingCreation>
        <MainContainer>
          <div className="content">
            <GameCreator>
              <h1>Jane Wilson, Gaming Creator</h1>

              <p>
                A virtual headset creator is an individual or company that
                specializes in designing and manufacturing virtual reality
                headsets, also known as VR headsets.
              </p>

              <div>
                <button type="button">
                  Read my blog <img src={ArrowForward2} alt="arrow-forward" />
                </button>
              </div>

              <img src={PeoplesViews} />
            </GameCreator>

            <div className="creater">
              <img className="people" src={Creator} alt="game creater" />
              <img className="coments" src={Coments} alt="people coments" />
            </div>
          </div>
        </MainContainer>
      </GamingCreation>

      <PageCardsGames />

      <QuestionBoard />

      <Footer />
    </>
  );
}
