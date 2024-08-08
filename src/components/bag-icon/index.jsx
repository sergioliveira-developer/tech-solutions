import { ContainerBag } from './styles';
import { Bag } from '@phosphor-icons/react';

export const BagIcon = function ({ ...props }) {
  return (
    <ContainerBag {...props}>
      <Bag />
    </ContainerBag>
  );
};
