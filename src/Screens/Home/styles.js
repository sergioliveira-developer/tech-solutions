import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

// Media Queries para telas grandes, médias e pequenas
const device = {
  large: '@media (min-width: 1200px)', // Telas grandes
  medium: '@media (min-width: 768px) and (max-width: 1199px)', // Telas médias
  small: '@media (max-width: 768px)', // Telas pequenas
};

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  padding: 0 12px;
  z-index: 2;

  ${device.medium} {
    padding: 0 24px;
  }

  ${device.small} {
    padding: 0 16px;
  }
`;

export const SectionInformations = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background: url('./isolation-mode.svg') no-repeat center;
  background-size: cover;

  ${device.medium} {
    background-size: contain;
  }
`;

export const HamburgerIcon = styled.div`
  display: none; /* Escondido em telas grandes */
  flex-direction: column;
  gap: 6px;
  cursor: pointer;

  span {
    width: 30px;
    height: 3px;
    background: ${theme.colors.white};
    transition: 0.4s ease;
  }

  ${device.small} {
    display: flex; /* Mostrado apenas em telas pequenas */
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 2; /* Espaço flexível para as opções de menu */

  a {
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.white};
    transition: color 0.5s ease-in-out;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.error};
    }
  }

  /* Para telas pequenas, o menu se torna uma coluna */
  ${device.small} {
    display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%; /* O menu ocupa toda a largura disponível */
    max-width: 300px;
    background-color: ${theme.colors.background}; /* Cor de fundo para o menu */
    padding: 16px;
    gap: 16px; /* Espaçamento entre os links no menu hamburguer */

    a {
      font-size: 18px;
      color: ${theme.colors.white};
      padding: 10px 0;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 56px 0;
  flex-wrap: wrap;

  .logo {
    width: 98px;
    height: 28px;
    flex: 1; /* A logo ocupa um espaço proporcional */
  }

  .search {
    display: flex;
    align-items: center;
    gap: 24px;
    flex: 2; /* A barra de busca ocupa mais espaço em telas maiores */
  }

  ${device.medium} {
    padding: 40px 0;
  }

  ${device.small} {
    padding: 15px 0;
    gap: 12px;
    flex-wrap: nowrap;

    .logo {
      flex: 1;
    }

    .search {
      flex: 1;
      justify-content: flex-end;

      input {
        display: none; /* Escondemos a barra de busca em telas pequenas */
      }
    }
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 72px 0;
  width: 100%;

  .hero-text {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .container-buttons {
      display: flex;
      gap: 12px;
    }

    .follow-us {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    h4 {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.2rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${theme.colors.white};
    }
  }

  .glasses-using {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
    max-width: 800px;

    .user-experience {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;

      div {
        display: flex;
        align-items: center;
        gap: 24px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        color: ${theme.colors.neutral};

        &:hover,
        img {
          opacity: 0.8;
        }
      }
    }
  }

  ${device.medium} {
    padding: 40px 0;
    .hero-text {
      gap: 20px;

      .container-buttons {
        flex-direction: column;
        gap: 10px;
      }
    }
    .glasses-using {
      flex-direction: column;
      .icons {
        gap: 24px;
      }
    }
  }

  ${device.small} {
    display: flex;
    flex-direction: column;
    padding: 20px 0;

    .hero-text {
      gap: 16px;

      .container-buttons {
        flex-direction: column;
        gap: 24px;
        margin-bottom: 36px;
      }
    }
    .glasses-using {
      margin-top: 25px;
      width: 100%;

      .user-experience {
        img {
          max-width: 380px;
          width: 100%;
          min-height: 100%;
        }
      }

      .icons {
        flex-direction: column;
        gap: 16px;
      }
    }
  }
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    padding: 50px 0;
    width: 100%;

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 450px;
      width: 100%;
      height: auto;

      img {
        max-width: 800px;
        min-height: auto;
      }
    }

    ${device.medium} {
      padding: 40px 0;
      flex-direction: column-reverse; /* Inverte a ordem da imagem e do ContainerBody */
      align-items: center;
      justify-content: center;
    }

    ${device.small} {
      padding: 20px 0;
      flex-direction: column-reverse; /* Inverte a ordem em telas pequenas também */
      align-items: center;
      justify-content: center;

      .content {
        display: flex;
        flex-direction: column; /* Garante que tudo fique em coluna */
      }

      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 80px;

        width: 324px;
        height: 230px;

        img {
          width: 500px;
        }
      }
    }
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
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

    ${device.medium} {
      font-size: 36px; /* Tamanho menor em telas médias */
      max-width: 100%;
    }

    ${device.small} {
      max-width: 345px;
      font-size: 24px; /* Fonte menor para telas pequenas */
    }
  }

  .infos {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: 100%;

    div {
      flex-basis: calc(50% - 12px); /* Ocupar 50% da largura com espaçamento */
    }

    ${device.small} {
      flex-direction: column; /* Coloca os itens em coluna */
      gap: 16px; /* Reduz o espaçamento em telas pequenas */

      div {
        flex-basis: 100%; /* Cada item ocupa 100% da largura */
      }
    }
  }

  img {
    width: 22px;
    height: 22px;
  }

  .high-resolution,
  .refresh-rate,
  .inside-tracking,
  .eye-tracking,
  .high-resolution1,
  .refresh-rate1 {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};

    ${device.small} {
      font-size: 14px; /* Reduz o tamanho da fonte em telas pequenas */
    }
  }

  ${device.small} {
    .high-resolution,
    .refresh-rate,
    .inside-tracking {
      max-width: 340px;
    }

    .eye-tracking,
    .high-resolution1,
    .refresh-rate1 {
      display: none; /* Esconde alguns itens para evitar sobrecarga visual */
    }
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

    ${device.medium} {
      padding: 40px 0;
      flex-direction: column;
      gap: 24px;
    }

    ${device.small} {
      padding: 20px 0;
      flex-direction: column;
      gap: 16px;
    }
  }

  .creater {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;

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

      ${device.small} {
        left: 0;
        bottom: -20px;
        max-width: 300px;
      }
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

  ${device.medium} {
    h1 {
      font-size: 48px;
    }

    p {
      width: 100%;
      font-size: 14px;
    }

    button {
      font-size: 16px;
    }
  }

  ${device.small} {
    padding: 0 20px;

    h1 {
      font-size: 24px;
    }

    p {
      width: 100%;
      font-size: 14px;
    }

    button {
      font-size: 14px;
    }
  }
`;
