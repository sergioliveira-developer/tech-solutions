import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 120rem;
  width: 100%;
`;

export const SectionInformations = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

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
    width: 98px;
    height: 28px;
    left: 908px;
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

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px;
  gap: 40px;
  position: absolute;
  width: 100%;
  left: 976px;
  top: 975px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 130%;
    letter-spacing: -0.02em;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    color: ${theme.colors.white};
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 32px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  img {
    width: 1.375rem;
    height: 1.375rem;
  }

  .high-resolution {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .refresh-rate {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .inside-tracking {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .eye-tracking {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .high-resolution1 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .refresh-rate1 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }
`;

export const ContainerGlasses = styled.div`
  position: absolute;
  width: 522px;
  height: 486px;
  left: 273px;
  top: 947px;

  /* img {
    box-shadow: 0px 10px 49px rgba(203, 0, 221, 0.2);
  } */
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
    order: 2;
    flex-grow: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.5rem;
    text-align: center;
    color: ${theme.colors.lightblue};
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

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 10.5rem;
  position: absolute;
  padding: 5.1875rem 16.3125rem 4.8125rem 16rem;
  width: 100%;
  max-width: 120rem;
  left: 245px;
  top: 4127px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;

  .container-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    color: ${theme.colors.white};

    .social-media {
      display: flex;
      gap: 1.5rem;
      color: ${theme.colors.white};

      div {
        padding: 0.25rem;

        &:hover {
          opacity: 0.6;
          transition: 0.5s ease-in-out;
        }
      }
    }
  }

  .container-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    color: ${theme.colors.white};
  }

  .container-company {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    color: ${theme.colors.white};
  }

  .container-newsletter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    color: ${theme.colors.white};

    .container-subscribe {
      display: flex;
      justify-content: center;
      padding: 0 0 0 1.5rem;
      gap: 9.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 0.25rem;

      input {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.625rem;
        color: ${theme.colors.purple};
        border: none;
        background: none;
        filter: drop-shadow(0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25));

        &::placeholder {
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.375rem;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.375rem 1.8125rem;
        background: ${theme.colors.lightblue};
        border: none;
        border-radius: 0px 0.25rem 0.25rem 0px;
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.375rem;
        box-shadow: 0px 20px 49px rgba(61, 222, 237, 0.17);
        color: ${theme.colors.darkpurple};

        &:hover {
          opacity: 0.6;
          transition: 0.5s ease-in-out;
        }
      }
    }
  }
`;
