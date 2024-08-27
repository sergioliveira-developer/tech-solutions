import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoDiscord,
  IoLogoFacebook,
} from 'react-icons/io5';

import { useWindowSizeIcons } from '../../components/windowSizeIcons';

import { ContainerSocial, IconsGroup } from './styles';

export function SocialMedia() {
  const { width } = useWindowSizeIcons();
  const iconSize = width > 768 ? 24 : 24;
  return (
    <ContainerSocial>
      
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
  );
}
