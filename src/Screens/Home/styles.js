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
    color: ${theme.colors.white};

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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
`;

export const SectionInformations = styled.section`
  display: flex;
  background-image: url(${Background});
  padding: 2rem;
  width: 100%;
  height: 42.69rem;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
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
  width: 100%;
`;

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  strong {
    padding: 0.25rem;
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
    padding: 0.625rem;
    border: 1px solid ${theme.colors.white};
    border-radius: 0.25rem;
    color: ${theme.colors.white};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }
`;

export const SectionDescription = styled.section`
  display: flex;
  gap: 5rem;
  padding: 1rem;
  width: 100%;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -2%;
    color: ${theme.colors.white};
    text-align: left;
  }
`;

export const DescriptionProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  column-gap: 5rem;
  width: 100%;

  div {
    display: grid;
    grid-template-rows: repeat(3, 50px);
    row-gap: 2rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
    width: 100%;

    img {
      width: 1.375rem;
      height: 1.375rem;
      position: relative;
      top: 0;
    }
  }
`;

export const GamingCreate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

export const GamingCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  width: 100%;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    text-align: left;
    line-height: 130%;
    letter-spacing: -2%;
    color: ${theme.colors.white};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
    line-height: 150%;
    letter-spacing: 0%;
    color: ${theme.colors.white};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 1rem 1.5rem;
    font-size: 1.15rem;
    line-height: auto;
    letter-spacing: 0%;
    text-align: center;
    font-weight: 500;
    border: none;
    border-radius: 0.25rem;
    color: ${theme.colors.lightblue};
    background-color: ${theme.colors.darkblue};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }
`;

export const TopGames = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.darkpurple};
  padding: 2rem 1rem;
  width: 100%;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -2%;
    color: ${theme.colors.white};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};

    span {
      color: ${theme.colors.lightblue};
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.25rem;

    button {
      background-color: ${theme.colors.darkblue};
      padding: 1rem;
      border-radius: 0.5rem;
      border: none;

      &:hover {
        opacity: 0.6;
        transition: 0.5s ease-in-out;
      }
    }
  }

  .arrow-left {
    transform: rotate(180deg);
  }
`;
