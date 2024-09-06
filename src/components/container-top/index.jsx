import PropTypes from 'prop-types';
import PinkStar from '../../../public/pink-star.svg';
import { Container } from './styles';

export function InformationTop({
  title,
  subtitle,
  color = '#fff',
  subtitleColor = '#fff',
  ...props
}) {
  // Nova prop subtitleColor
  return (
    <Container {...props}>
      <h3 style={{ color: subtitleColor }}>{subtitle}</h3>{' '}
      {/* Cor aplicada no subtítulo */}
      <h1 style={{ color }}>Experience a new dimension of reality</h1>{' '}
      {/* Cor aplicada no título */}
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
  color: PropTypes.string, // Cor do título
  subtitleColor: PropTypes.string, // Cor do subtítulo
};
