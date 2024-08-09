import { Logo } from '../../components/logo';
import { Input } from '../../components/inputs';
import { BagIcon } from '../../components/bag-icon';
import { InformationContainer } from '../../components/containerInfo';
import { DesignerImg } from '../../components/images';

import UserExperience from '../../assets/user-experience.svg';
import Star from '../../assets/Star.svg';

import {
  ContainerMain,
  TopContainer,
  Header,
  SectionInformations,
} from './styles';

export function Home() {
  return (
    <ContainerMain>
      <TopContainer>
        <Header>
          <a>Home</a>
          <a>Catalog</a>
          <a>Contact</a>
          <a>Features</a>
        </Header>

        <Logo />

        <Input placeholder="Search games & products.." />

        <BagIcon />
      </TopContainer>

      
        <SectionInformations>
          <InformationContainer
            title="Experience a new dimension of reality"
            subtitle="Virtual Headsets"
            src={Star}
            text=" Step into the future with our virtual headset, come to life right before your eyes"
          />
          <DesignerImg src={UserExperience} />
        </SectionInformations>

        
      
    </ContainerMain>
  );
}
