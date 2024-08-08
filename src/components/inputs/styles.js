import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: ${theme.colors.darkpurple};
  width: 21rem;
  height: 2.875rem;
  padding: 1.5rem 0.75rem;
  border: 1px solid ${theme.colors.purple};
  border-radius: 0.25rem;

  input {
    width: 15.62rem;
    height: 1.37rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: auto;
    letter-spacing: 0%;
    background-color: ${theme.colors.darkpurple};
    border: 1px solid transparent;
    transition: all 100ms;

    &:focus {
      border-color: ${theme.colors.white};
    }

    &::placeholder {
      color: ${theme.colors.white};
    }
  }
`;
