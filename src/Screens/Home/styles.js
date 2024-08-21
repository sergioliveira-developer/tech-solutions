import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

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

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  position: absolute;
  width: 688px;
  height: 467px;
  left: 976px;
  top: 975px;

  h1 {
    width: 688px;
    height: 219px;
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
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0px;
  gap: 32px;
  width: 688px;
  height: 208px;
  flex: none;
  order: 1;
  flex-grow: 0;

  img {
    width: 1.375rem;
    height: 1.375rem;
  }

  .high-resolution {
    display: flex;
    gap: 1rem;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .refresh-rate {
    display: flex;
    gap: 1rem;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .inside-tracking {
    display: flex;
    gap: 1rem;
    flex: none;
    order: 2;
    flex-grow: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .eye-tracking {
    display: flex;
    gap: 1rem;
    order: 3;
    flex-grow: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .high-resolution1 {
    display: flex;
    gap: 1rem;
    order: 4;
    flex-grow: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .refresh-rate1 {
    display: flex;
    gap: 1rem;
    order: 5;
    flex-grow: 0;
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
  position: absolute;
  width: 1920px;
  height: 484px;
  left: 50px;
  top: 4210px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;

  .container-contact {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 168px;
    height: 128px;
    left: 256px;
    top: 4210px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.8);
  }

  .container-header {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 59px;
    height: 208px;
    left: 642px;
    top: 4210px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.8);
  }

  .container-company {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 82px;
    height: 209px;
    left: 919px;
    top: 4210px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.8);
  }

  .container-newcastle {
    display: flex;
    flex-direction: column;

    h3 {
      position: absolute;
      width: 225px;
      height: 24px;
      left: 1216px;
      top: 4210px;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: ${theme.colors.white};
    }

    p {
      position: absolute;
      width: 448px;
      height: 44px;
      left: 1216px;
      top: 4258px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.8);
    }

    .subscribe {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 12px 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);

      input {
        box-sizing: border-box;
        gap: 10px;
        position: absolute;
        padding: 1.5rem 1rem;
        background: none;
        left: 1216px;
        top: 4342px;
        border-radius: 0.25rem;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.375rem 1.82rem;
        gap: 0.625rem;
        position: absolute;
        left: 1530px;
        top: 4342px;
        background-color: ${theme.colors.lightblue};
        border-radius: 0px 4px 4px 0px;
      }
    }
  }
`;
