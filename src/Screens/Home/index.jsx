import { Logo } from '../../components/logo';
import { Input } from '../../components/inputs';
import { BagIcon } from '../../components/bag-icon';
import { InformationTop } from '../../components/container-top';
import { DesignerImg } from '../../components/images';
import { Button } from '../../components/buttons';
import { useWindowSizeIcons } from '../../components/windowSizeIcons';

import UserExperience from '../../assets/user-experience.svg';
import Star from '../../assets/star.svg';
import ArrowForward from '../../assets/arrow-forward.svg';
import ArrowForward2 from '../../assets/arrow-forward2.svg';
import Explore from '../../assets/explore.svg';
import Glasses from '../../assets/glasses.svg';
import StarBlue from '../../assets/star-blue.svg';
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
  ContainerImage,
  SectionDescription,
  ContainerBody,
  DescriptionProduct,
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
      <Header>
        <div>
          <a>Home</a>
          <a>Catalog</a>
          <a>Contact</a>
          <a>Features</a>
        </div>

        <Logo />

        <div>
          <Input placeholder="Search games & products.." />

          <BagIcon />
        </div>
      </Header>

      <ContainerMain>
        <SectionInformations>
          <ContainerTop>
            <InformationTop
              title="Experience a new dimension of reality"
              subtitle="Virtual Headsets"
              src={Star}
              text=" Step into the future with our virtual headset, come to life right before your eyes"
            />

            <div>
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
                <div>
                  <IoLogoTwitter size={iconSize} />
                </div>

                <div>
                  <IoLogoInstagram size={iconSize} />
                </div>

                <div>
                  <IoLogoDiscord size={iconSize} />
                </div>

                <div>
                  <IoLogoFacebook size={iconSize} />
                </div>
              </IconsGroup>
            </ContainerSocial>
          </ContainerTop>

          <ContainerImage>
            <DesignerImg src={UserExperience} />
          </ContainerImage>
        </SectionInformations>

        <SectionDescription>
          <ContainerImage>
            <DesignerImg src={Glasses} $image="glasses" />
          </ContainerImage>

          <ContainerBody>
            <DescriptionProduct>
              <h1>
                Our Virtual Headsets
                <br />
                Shine with Unique
                <br />
                Features!
              </h1>

              <div>
                <div>
                  <img src={StarBlue} />
                </div>
                High-resolution OLED or LCD screens:
                <br />
                Provide sharp and clear visuals.
              </div>

              <div>
                <div>
                  <img src={StarBlue} />
                </div>
                Refresh rate:
                <br />
                Higher refresh rates reduce motion sickness and provide.
              </div>

              <div>
                <div>
                  <img src={StarBlue} />
                </div>
                Inside-out tracking:
                <br />
                Built-in sensors (cameras or other sensors).
              </div>

              <div>
                <div>
                  <img src={StarBlue} />
                </div>
                Eye tracking:
                <br />
                Monitors the movement of the users eyes, allowing for more.
              </div>

              <div>
                <div>
                  <img src={StarBlue} />
                </div>
                High-resolution OLED or LCD screens:
                <br />
                Provide sharp and clear visuals.
              </div>

              <div>
                <div>
                  <img src={StarBlue} />
                </div>
                Refresh rate:
                <br />
                Higher refresh rates reduce motion sickness and provide.
              </div>
            </DescriptionProduct>
          </ContainerBody>
        </SectionDescription>

        <GamingCreate>
          <GamingCreator>
            <h1>Jane Wilson, Gaming Creator</h1>

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

          <img src={People}>{/* <img src={Coments} /> */}</img>
        </GamingCreate>

        <TopGames>
          <h1>Top Games</h1>

          <p>
            If you buy video 2 games, you will receive 1
            <br />
            video game for free, along with a <span>50%</span> discount.
          </p>

          <div>
            <button>
              <img className="arrow-left" src={ArrowForward2} />
            </button>

            <button>
              <img src={ArrowForward2} />
            </button>
          </div>
        </TopGames>
      </ContainerMain>
    </>
  );
}
