import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
  background-color: ${theme.colors.darkpurple};
  padding: 2rem;
  height: 100vh;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 6rem;
  padding: 2rem;
`;

export const Header = styled.header`
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0;

  a {
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    line-height: auto;
    letter-spacing: 0%;
    color: #fff;

    &:hover {
      color: ${theme.colors.error};
      font-size: 1rem;
      transition: 0.5s ease-in-out;
    }
  }
`;
