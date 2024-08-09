import PropTypes from 'prop-types';

import { ContainerImg } from './styles';

export function DesignerImg({ src, ...props }) {
  return (
    <ContainerImg {...props}>
      <img src={src} />
    </ContainerImg>
  );
}

DesignerImg.propTypes = {
  src: PropTypes.func.img,
};
