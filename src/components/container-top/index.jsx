import PropTypes from 'prop-types';

import { Container } from './styles';

export function InformationTop({ title, subtitle, text, src, ...props }) {
  return (
    <Container {...props}>
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
      <p>
        <img src={src} /> {text}
      </p>
    </Container>
  );
}

InformationTop.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.func.img,
};
