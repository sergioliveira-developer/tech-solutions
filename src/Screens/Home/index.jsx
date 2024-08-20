import { Logo } from '../../components/logo';
import { Input } from '../../components/inputs';
import { BagIcon } from '../../components/bag-icon';
import { InformationTop } from '../../components/container-top';
import { Button } from '../../components/buttons';
import { useWindowSizeIcons } from '../../components/windowSizeIcons';
import { PageCardsGames } from '../PageCards';

import IsolationMode from '../../assets/isolation-mode.svg';
import UserExperience from '../../assets/user-experience.svg';
import ArrowForward from '../../assets/arrow-forward.svg';
import ArrowForward2 from '../../assets/arrow-forward2.svg';
import Explore from '../../assets/explore.svg';
import Glasses from '../../assets/glasses.svg';
import BlueStar from '../../assets/blue-star.svg';
import PeoplesViews from '../../assets/peoples-views.svg';
import People from '../../assets/people.svg';
// import Coments from '../../assets/coments.svg';

import {
  Header,
  ContainerMain,
  SectionInformations,
  ContainerTop,
  ContainerSocial,
  IconsGroup,
  SectionDescription,
  ContainerBody,
  GamingCreator,
  GamingCreate,
  TopGames,
} from './styles';

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoDiscord,
  IoLogoFacebook,
} from 'react-icons/io5';

export function Home() {
  const { width } = useWindowSizeIcons();
  const iconSize = width > 768 ? 24 : 24;
  return (
    <>
      <ContainerMain>
        <SectionInformations>
          <img className="background" src={IsolationMode} alt="background" />

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

            <div>
              <Input placeholder="Search games & products.." />
            </div>
            <BagIcon />
          </Header>

          <ContainerTop>
            <InformationTop subtitle="Virtual Headsets" />

            <div className="container-buttons">
              <Button theme="blue" type="button">
                Visit Sttore <img src={ArrowForward} alt="arrow-forward" />
              </Button>

              <Button type="button">
                <img src={Explore} alt="expore-icon" /> Explore
              </Button>
            </div>

            <ContainerSocial>
              <strong>FOLLOW US</strong>
              <IconsGroup>
                <div className="twitter">
                  <IoLogoTwitter size={iconSize} />
                </div>

                <div className="instagram">
                  <IoLogoInstagram size={iconSize} />
                </div>

                <div className="discord">
                  <IoLogoDiscord size={iconSize} />
                </div>

                <div className="facebook">
                  <IoLogoFacebook size={iconSize} />
                </div>
              </IconsGroup>
            </ContainerSocial>
          </ContainerTop>

          <img
            className="glasses-using"
            src={UserExperience}
            placeholder="text-tecnology"
          />
        </SectionInformations>

        <SectionDescription>
          <ContainerBody>
            <h1>
              Our Virtual Headsets
              <br />
              Shine with Unique
              <br />
              Features!
            </h1>

            <div className="description">
              <div className="high-resolution">
                High-resolution OLED or LCD screens:
                <br />
                Provide sharp and clear visuals.
                <img src={BlueStar} />
              </div>

              <div className="refresh-rate">
                Refresh rate:
                <br />
                Higher refresh rates reduce motion sickness and provide.
                <img src={BlueStar} />
              </div>

              <div className="inside-tracking">
                Inside-out tracking:
                <br />
                Built-in sensors (cameras or other sensors).
                <img src={BlueStar} />
              </div>

              <div className="eye-tracking">
                Eye tracking:
                <br />
                Monitors the movement of the users eyes, allowing for more.
                <img src={BlueStar} />
              </div>

              <div className="high-resolution1">
                High-resolution OLED or LCD screens:
                <br />
                Provide sharp and clear visuals.
                <img src={BlueStar} />
              </div>

              <div className="refresh-rate1">
                Refresh rate:
                <br />
                Higher refresh rates reduce motion sickness and provide.
                <img src={BlueStar} />
              </div>
            </div>
          </ContainerBody>

          <div className="glasses">
            <img src={Glasses} />
          </div>
        </SectionDescription>

        <GamingCreate>
          <GamingCreator>
            <h1>
              Jane Wilson,
              <br />
              Gaming Creator
            </h1>

            <p>
              A virtual headset creator is an individual or company that
              specializes in designing
              <br />
              and manufacturing virtual reality headsets, also known as VR
              headsets.
            </p>

            <button type="button">
              Read my blog <img src={ArrowForward2} alt="arrow-forward" />
            </button>

            <img src={PeoplesViews} />
          </GamingCreator>

          <div className="create">
            <img src={People} />
          </div>
        </GamingCreate>

        <TopGames>
          <h1>Top Games</h1>

          <p>
            If you buy video 2 games, you will receive 1
            <br />
            video game for free, along with a <span>50%</span> discount.
          </p>

          <div className="container-buttons">
            <button>
              <img className="arrow-left" src={ArrowForward2} />
            </button>

            <button>
              <img src={ArrowForward2} />
            </button>
          </div>
        </TopGames>
        <PageCardsGames />
      </ContainerMain>
    </>
  );
}
