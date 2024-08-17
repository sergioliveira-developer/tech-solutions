import PropTypes from 'prop-types';

import { Container } from './styles';

export function Description({ children, title, src, ...props }) {
  return (
    <Container {...props}>
      <h1>{title}</h1>

      <div>
        <p>
          <img src={src} /> {children}
        </p>
      </div>
    </Container>
  );
}

Description.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.func.img,
};
