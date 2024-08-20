import PropTypes from 'prop-types';

import { Buttons } from './styles';

export function Button({ children, theme, ...props }) {
  return (
    <Buttons theme={theme} {...props}>
      {children}
    </Buttons>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};
