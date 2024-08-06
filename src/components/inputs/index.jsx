import PropTypes from 'prop-types';

import { ContainerInput } from './styles';

export function Input({ children, ...props }) {
  return (
    <ContainerInput>
      {children}
      <input type="search" {...props}></input>
    </ContainerInput>
  );
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
};
