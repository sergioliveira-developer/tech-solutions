import PropTypes from 'prop-types';

import PinkStar from '../../assets/pink-star.svg';

import { Container } from './styles';

export function InformationTop({ title, subtitle, ...props }) {
  return (
    <Container {...props}>
      <h3>{subtitle}</h3>
      <h1>Experience a new dimension of reality</h1>

      <div className="description">
        <img className="pink-star" src={PinkStar} alt="pink-star" />
        <p>
          Step into the future with our virtual headset, come to life right
          before your eyes
        </p>
      </div>
    </Container>
  );
}

InformationTop.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
