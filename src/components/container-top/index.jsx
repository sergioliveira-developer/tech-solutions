import PropTypes from 'prop-types';

import PinkStar from '../../assets/pink-star.svg';

import { Container } from './styles';

export function InformationTop({ title, subtitle, src, ...props }) {
  return (
    <Container {...props}>
      <h3>{subtitle}</h3>
      <h1>
        Experience a
        <br />
        new dimension
        <br />
        of reality
      </h1>

      <img className="pink-star" src={PinkStar} alt="pink-star" />
      <p>
        Step into the future with our virtual headset, come to life right before
        your eyes
      </p>
    </Container>
  );
}

InformationTop.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,

  src: PropTypes.func.img,
};
