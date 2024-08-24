import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const ButtonSource = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: ${theme.colors.white};
  padding: 0;

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }
`;
