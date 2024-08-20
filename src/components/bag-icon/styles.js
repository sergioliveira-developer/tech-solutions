import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerBag = styled.button`
  position: absolute;
  left: 1642px;
  top: 60px;
  background: none;
  border: none;
  color: ${theme.colors.white};

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }
`;
