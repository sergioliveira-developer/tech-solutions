import { Logo } from '../../components/logo';
import { Input } from '../../components/inputs';
import { BagIcon } from '../../components/bag-icon';
import { InformationContainer } from '../../components/containerInfo';
import { DesignerImg } from '../../components/images';
import { Button } from '../../components/buttons';

import UserExperience from '../../assets/user-experience.svg';
import Star from '../../assets/Star.svg';
import ArrowForward from '../../assets/arrow-forward.svg';
import Explore from '../../assets/explore.svg';

import {
  ContainerMain,
  Header,
  SectionInformations,
  ContainerImage,
} from './styles';

export function Home() {
  return (
    <>
      <Header>
<<<<<<< HEAD
        <div>
          <a>Home</a>
          <a>Catalog</a>
          <a>Contact</a>
          <a>Features</a>
        </div>
=======
        <a>Home</a>
        <a>Catalog</a>
        <a>Contact</a>
        <a>Features</a>
>>>>>>> 168da290bc52b5974687edf923e73dd9464bfb93

        <Logo />

        <div>
          <Input placeholder="Search games & products.." />

          <BagIcon />
        </div>
      </Header>

      <ContainerMain>
        <SectionInformations>
          <InformationContainer
            title="Experience a new dimension of reality"
            subtitle="Virtual Headsets"
            src={Star}
            text=" Step into the future with our virtual headset, come to life right before your eyes"
          />

          <div>
            <Button theme="blue">
              Visit Sttore <img src={ArrowForward} />
            </Button>

            <Button>
              <img src={Explore} /> Explore
            </Button>
          </div>
        </SectionInformations>

        <ContainerImage>
          <DesignerImg src={UserExperience} />
        </ContainerImage>
      </ContainerMain>
    </>
  );
}
