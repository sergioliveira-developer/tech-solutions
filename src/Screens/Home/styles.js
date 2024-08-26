import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  padding: 0 12px;
  z-index: 2;
`;

export const SectionInformations = styled.section`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: url('./isolation-mode.svg') no-repeat center;
  background-size: cover;

  .glasses-using {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
    max-width: 800px;
    height: auto;

    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;

      img {
        &:hover {
          opacity: 0.6;
          transition: 0.5s ease-in-out;
        }
      }

      div,
      span {
        display: flex;
        align-items: center;
        gap: 24px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 56px 0;

  .links {
    display: flex;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;

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
    width: 98px;
    height: 28px;
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 72px 0;

  .hero-text {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .container-buttons {
    display: flex;
    gap: 12px;
  }
`;

export const SectionDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .content {
    display: flex;
    justify-content: space-between;
    padding: 80px 0;
    width: 100%;
  }

  .image {
    width: 100%;
    max-width: 700px;
    height: auto;
    position: relative;
    z-index: -1;
  }

  .elipse {
      width: 100%;
      max-width: 700px;
      position: absolute;
      left: 300px;
      top: 700px;
      /* background: rgba(83, 0, 112, 0.5); */
      filter: blur(229px);
      transform: rotate(128.9deg);
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 40px;
  width: 100%;
  max-width: 704px;

  h1 {
    max-width: 570px;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};
  }

  .infos {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: 100%;

    div {
      flex-basis: calc(100% / 2 - 12px);
    }
  }

  img {
    width: 22px;
    height: 22px;
  }

  .high-resolution {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .refresh-rate {
    display: flex;
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
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .eye-tracking {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .high-resolution1 {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .refresh-rate1 {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }
`;

export const GamingCreation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  width: 100%;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
    width: 100%;
    padding: 20px 0;
  }

  .creater {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;

    /* box-shadow: 0px 10px 10px rgba(203, 0, 221, 0.2); */

    .people {
      width: 100%;
      max-width: 700px;
    }

    .coments {
      position: absolute;
      max-width: 416px;
      left: -30px;
      bottom: -40px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const GameCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  h1 {
    max-width: 425px;
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
    color: ${theme.colors.white};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 24px;
    background: rgba(50, 116, 248, 0.12);
    border: none;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: ${theme.colors.lightblue};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 10.5rem;

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
