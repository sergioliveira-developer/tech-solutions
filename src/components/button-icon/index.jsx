import { ButtonSource } from './styles';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const ButtonIcon = function ({ ...props }) {
  return (
    <ButtonSource {...props}>
      <MagnifyingGlass />
    </ButtonSource>
  );
};
