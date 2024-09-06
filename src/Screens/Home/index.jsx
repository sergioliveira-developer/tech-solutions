import {
  BagIcon,
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
  ContainerMain,
  ContainerTop,
  GameCreator,
  GamingCreation,
  Header,
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
import PeoplesViews from '../../../public/peoples-views.svg';
import Creator from '../../../public/creator.png';
import Coments from '../../../public/coments.svg';
import Line3 from '../../../public/line-3.svg';

import { PageCardsGames } from '../PageCards';
import { useState, useEffect } from 'react';

export function Home() {
  const [titleColor, setTitleColor] = useState('#fff'); // Cor do título
  const [subtitleColor, setSubtitleColor] = useState('#fff'); // Cor do subtítulo

  // Função para gerar uma cor hexadecimal aleatória
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // useEffect para definir uma nova cor do título quando a página for recarregada
  useEffect(() => {
    setTitleColor(getRandomColor());
  }, []); // Executa apenas uma vez no carregamento da página

  // Função para alterar a cor do subtítulo ao clicar no botão "Visit Store"
  const changeSubtitleColor = () => {
    setSubtitleColor(getRandomColor());
  };

  return (
    <>
      <SectionInformations>
        <ContainerMain>
          <Header>
            <div className="links">
              <a>Home</a>
              <a>Catalog</a>
              <a>Contact</a>
              <a>Features</a>
            </div>

            <div className="logo">
              <Logo />
            </div>

            <div className="search">
              <Input placeholder="Search games & products.." />
              <BagIcon />
            </div>
          </Header>

          <ContainerTop>
            <div className="hero-text">
              <InformationTop
                subtitle="Virtual Headsets"
                color={titleColor}
                subtitleColor={subtitleColor}
              />

              <div className="container-buttons">
                <Button
                  theme="blue"
                  type="button"
                  onClick={changeSubtitleColor}
                >
                  Visit Sttore <img src={ArrowForward} alt="arrow-forward" />
                </Button>

                <Button type="button">
                  <img src={Explore} alt="expore-icon" /> Explore
                </Button>
              </div>

              <div className="follow-us">
                <strong>FOLLOW US</strong>
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
        </ContainerMain>
      </SectionInformations>

      <SectionDescription>
        <ContainerMain>
          <div className="content">
            <div className="image">
              <img src={Glasses} />
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
        </ContainerMain>
      </SectionDescription>

      <GamingCreation>
        <ContainerMain>
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
        </ContainerMain>
      </GamingCreation>

      <PageCardsGames />

      <QuestionBoard />

      <Footer />
    </>
  );
}
