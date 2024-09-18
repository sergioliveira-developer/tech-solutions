import { SourceIcon } from '../button-icon';
import { InputContainer } from './styles';

export const Input = function ({ ...props }) {
  return (
    <InputContainer>
      <input {...props} />
      <SourceIcon />
    </InputContainer>
  );
};
