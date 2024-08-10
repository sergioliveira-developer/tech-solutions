import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

import Background from '../../assets/background.svg';


export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.darkpurple};
  padding: 2rem;
  height: 100vh;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 6rem;
  padding: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.darkpurple};
  padding: 2rem;

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

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const SectionInformations = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

`;

