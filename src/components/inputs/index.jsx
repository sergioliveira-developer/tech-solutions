import { ButtonIcon } from '../button-icon';
import { ContainerInput } from './styles';

export const Input = function ({ ...props }) {
  return (
    <ContainerInput>
      <input {...props} />
      <ButtonIcon />
    </ContainerInput>
  );
};
