import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5rem;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;

  input {
    width: 250px;
    height: 22px;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.375rem;
    background: none;
    border: none;
    color: ${theme.colors.purple};
    flex-grow: 1;
    transition: all 300ms;

    &::placeholder {
      color: ${theme.colors.white};
    }
  }
`;
