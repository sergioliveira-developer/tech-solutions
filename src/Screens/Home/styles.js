import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.darkpurple};
  background-size: cover;
  padding: 2rem;
  min-height: 100vh;
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
  flex-direction: column;
  justify-content: space-around;
  gap: 1.5rem;
  padding: 1rem;


  div {
    display: flex;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-around;
`;
