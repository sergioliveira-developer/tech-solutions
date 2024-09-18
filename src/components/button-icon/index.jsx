import { SourceButton } from './styles';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const SourceIcon = function ({ ...props }) {
  return (
    <SourceButton {...props}>
      <MagnifyingGlass />
    </SourceButton>
  );
};
