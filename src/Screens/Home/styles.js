import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

import IsolationMode from '../../assets/isolation-mode.svg';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
`;

export const SectionInformations = styled.section`
  display: flex;
  flex-direction: column;

  .background {
    position: absolute;
    width: 1920px;
    height: 796px;
    left: 3px;
    top: 43px;
  }

  .glasses-using {
    position: absolute;
    width: 995px;
    height: 636px;
    left: 902px;
    top: 177px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  padding: 2rem;
  width: 100%;

  .links {
    display: flex;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    position: absolute;
    width: 309px;
    height: 30px;
    left: 256px;
    top: 56px;

    a {
      display: flex;
      gap: 2rem;
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
  }

  .logo {
    position: absolute;
    width: 104px;
    height: 28px;
    left: calc(50% - 104px / 2);
    top: 57px;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem;

  .container-buttons {
    display: flex;
    gap: 1.5rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  strong {
    position: absolute;
    left: 256px;
    top: 740px;
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.2rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.colors.white};
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;

  .twitter {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    padding: 0.625rem;
    left: 257px;
    top: 771px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    color: ${theme.colors.white};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }

  .instagram {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    padding: 0.625rem;
    left: 313px;
    top: 771px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;

    color: ${theme.colors.white};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }

  .discord {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    padding: 0.625rem;
    left: 369px;
    top: 771px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    color: ${theme.colors.white};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }

  .facebook {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    padding: 0.625rem;
    left: 425px;
    top: 771px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;

    color: ${theme.colors.white};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }
`;

export const SectionDescription = styled.div`
  display: flex;
  padding: 0.25rem;

  .glasses {
    position: absolute;
    width: 522px;
    height: 486px;
    left: 273px;
    top: 947px;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 3.5rem;
  position: absolute;
  width: 688px;
  height: 467px;
  left: 976px;
  top: 975px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  .description {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    padding: 0px;
    gap: 2rem;
    width: 688px;
    height: 208px;
    flex: none;
    order: 1;
    flex-grow: 0;

    img {
      position: absolute;
      width: 22px;
      height: 22px;
      left: 0px;
      top: 0px;
    }
  }

  .high-resolution {
    width: 328px;
    height: 48px;
    flex: none;
    order: 0;
    flex-grow: 0;
    position: absolute;
    width: 290px;
    height: 48px;
    left: 38px;
    top: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.white};
  }

  .refresh-rate {
    width: 328px;
    height: 48px;
    flex: none;
    order: 1;
    flex-grow: 0;
    position: absolute;
    width: 290px;
    height: 48px;
    left: 398px;
    top: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.white};
  }

  .inside-tracking {
    width: 328px;
    height: 48px;
    flex: none;
    order: 2;
    flex-grow: 0;
    position: absolute;
    width: 290px;
    height: 48px;
    left: 38px;
    top: 80px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.white};
  }

  .eye-tracking {
    width: 328px;
    height: 48px;
    flex: none;
    order: 3;
    flex-grow: 0;
    position: absolute;
    width: 290px;
    height: 48px;
    left: 398px;
    top: 80px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.white};
  }

  .high-resolution1 {
    width: 328px;
    height: 48px;
    flex: none;
    order: 4;
    flex-grow: 0;
    position: absolute;
    width: 290px;
    height: 48px;
    left: 38px;
    top: 160px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.white};
  }

  .refresh-rate1 {
    width: 328px;
    height: 48px;
    flex: none;
    order: 5;
    flex-grow: 0;
    position: absolute;
    width: 290px;
    height: 48px;
    left: 398px;
    top: 160px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.white};
  }
`;

export const GamingCreate = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;

  .create {
    box-sizing: border-box;
    position: absolute;
    width: 688px;
    height: 540px;
    left: 976px;
    top: 1603px;
  }
`;

export const GamingCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2.5rem;
  position: absolute;
  width: 568px;
  height: 435px;
  left: 256px;
  top: 1697px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 130%;
    letter-spacing: -0.02em;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: ${theme.colors.white};
  }

  p {
    width: 568px;
    height: 48px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: ${theme.colors.white};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    gap: 1.5rem;
    background: rgba(50, 116, 248, 0.12);
    border-radius: 0.25rem;
    flex: none;
    order: 2;
    flex-grow: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.5rem;
    text-align: center;
    color: ${theme.colors.lightblue};
    flex: none;
    order: 0;
    flex-grow: 0;

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }
`;

export const TopGames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    position: absolute;
    left: 256px;
    top: 2420px;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};
  }

  p {
    position: absolute;
    top: 2433px;
    left: 814px;
    font-style: normal;
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

  .container-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    top: 2429px;
    left: 1538px;


    button {
      background: rgba(50, 116, 248, 0.12);
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
