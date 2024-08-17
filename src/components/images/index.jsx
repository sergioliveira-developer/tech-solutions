import PropTypes from 'prop-types';

import { ContainerImg } from './styles';

export function DesignerImg({ children, src, image, ...props }) {
  return (
    <ContainerImg image={image} {...props}>
      <img src={src} /> {children}
    </ContainerImg>
  );
}

DesignerImg.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.func.img,
  image: PropTypes.string,
};
