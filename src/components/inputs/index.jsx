import { BagIcon } from '../bag-icon';
import { SourceIcon } from '../button-icon';
import { Container, InputContainer } from './styles';

export const Input = function ({ ...props }) {
  return (
    <Container>
      <InputContainer>
        <input {...props} />

        <SourceIcon />
      </InputContainer>
      <BagIcon />
    </Container>
  );
};
