import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

import Background from '../../assets/background.svg';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 6rem;
  background-color: ${theme.colors.darkpurple};
  padding: 2.5rem;
  width: 100%;

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

export const ContainerMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
`;

export const SectionInformations = styled.section`
  display: flex;
  justify-content: space-around;
  background-image: url(${Background});
  width: 120rem;
  height: 42.5rem;
  padding: 0 2rem;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  > div {
    display: flex;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  strong {
    width: 5.625rem;
    height: 1.1875rem;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 8%;
    text-align: left;
    color: ${theme.colors.white};
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid ${theme.colors.white};
    border-radius: 0.25rem;
    color: ${theme.colors.white};
  }
`;
