import PropTypes from 'prop-types';

import { Container } from './styles';

export function InformationContainer({ title, subtitle, text, src, ...props }) {
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

InformationContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.func.img,
};
