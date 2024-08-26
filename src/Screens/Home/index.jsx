import {
  BagIcon,
  Button,
  InformationTop,
  Input,
  Logo,
  SocialMedia,
  QuestionBoard,
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

import ArrowForward from '../../assets/arrow-forward.svg';
import UserExperience from '../../assets/user-experience.png';
import EnhancedEducation from '../../assets/enhanced-education.svg';
import TrainingSimulation from '../../assets/training-simulation.svg';
import ArrowForward2 from '../../assets/arrow-forward2.svg';
import BlueStar from '../../assets/blue-star.svg';
import Explore from '../../assets/explore.svg';
import Glasses from '../../assets/glasses.png';
import PeoplesViews from '../../assets/peoples-views.svg';
import Creator from '../../assets/creator.png';
import Coments from '../../assets/coments.svg';
import Elipse from '../../assets/elipse.svg';

import { PageCardsGames } from '../PageCards';

export function Home() {
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
              <InformationTop subtitle="Virtual Headsets" />

              <div className="container-buttons">
                <Button theme="blue" type="button">
                  Visit Sttore <img src={ArrowForward} alt="arrow-forward" />
                </Button>

                <Button type="button">
                  <img src={Explore} alt="expore-icon" /> Explore
                </Button>
              </div>

              <SocialMedia />
            </div>

            <div className="glasses-using">
              <img src={UserExperience} />
              <div className="icons">
                <div>
                  <img src={EnhancedEducation} alt="icon" />
                  <span>EnhancedEducation</span>
                </div>

                <div>
                  <img src={TrainingSimulation} alt="icon" />
                  <span>TrainingSimulation</span>
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
              {/* <img className="elipse" src={Elipse} alt="box-shadow" /> */}
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

      {/*<Footer>
          <div className="container-contact">
            <Logo />

            <div className="social-media">
              <div>
                <IoLogoTwitter />
              </div>

              <div>
                <IoLogoInstagram />
              </div>

              <div>
                <IoLogoDiscord />
              </div>

              <div>
                <IoLogoFacebook />
              </div>
            </div>

            <label>+351 939274154</label>
          </div>

          <div className="container-header">
            <h3>Menu</h3>
            <a>Home</a>
            <a>Catalog</a>
            <a>Contact</a>
            <a>Features</a>
          </div>

          <div className="container-company">
            <h3>Company</h3>
            <a>Login</a>
            <a>Sign Up</a>
            <a>Privacy</a>
            <a>Products</a>
          </div>

          <div className="container-newsletter">
            <h3>Subscribe Our News Letter</h3>
            <p>
              Sure, please provide your email address to subscribe to
              <br />
              newsletter
            </p>

            <div className="container-subscribe">
              <input type="text" placeholder="Enter your mail..." />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="rights reserved">
            <p> © 2023 Your Company Name. All rights reserved.</p>
          </div>
        </Footer>
        */}
    </>
  );
}
