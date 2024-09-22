import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

// Media Queries para telas grandes, médias e pequenas
const device = {
  large: '@media (min-width: 1200px)', // Telas grandes
  medium: '@media (min-width: 768px) and (max-width: 1199px)', // Telas médias
  small: '@media (max-width: 768px)', // Telas pequenas
};

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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  padding: 0 12px;
  z-index: 2;
  overflow: hidden;

  ${device.medium} {
    padding: 0 24px;
  }

  ${device.small} {
    padding: 0 16px;
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
    flex: 1;
  }

  .search {
    display: flex;
    align-items: center;
    gap: 24px;
    flex: 1;
  }

  ${device.medium} {
    padding: 40px 0;
  }

  ${device.small} {
    padding: 15px 0;
    gap: 12px;
    flex-wrap: nowrap;

    .search {
      input {
        display: none; /* Escondemos a barra de busca em telas pequenas */
      }
    }
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  z-index: 100;
  flex: 2;

  .close-icon {
    display: none; /* Oculta o ícone de fechar em telas grandes */
  }

  a {
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.5s ease-in-out;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.lightpurple};
    }
  }

  ${device.medium} {
    display: none; /* Oculta o menu em telas médias e grandes */
  }

  /* Para telas pequenas, o menu se torna uma coluna */
  ${device.small} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    transform: translateX(
      ${({ isopen }) => (isopen ? '0' : '-100%')}
    ); /* Move para fora da tela se não estiver aberto */

    .close-icon {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      color: ${theme.colors.white};

      &:hover {
        color: ${theme.colors.purpledark};
      }
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  gap: 6px;

  &:hover {
    color: ${theme.colors.purpledark};
  }

  ${device.small} {
    display: flex;
    flex: 1;
    color: ${theme.colors.lightpurple};
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

        &:hover {
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
    gap: 32px;
    padding: 60px 0;
    width: 100%;

    .image {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .virtual-glasses {
        position: relative;
        z-index: 2;
        max-width: 65%;
        width: 100%;
        height: auto;
      }

      .arcle-icon {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        height: auto;
      }
    }
  }

  /* Ajustes para telas médias */
  ${device.medium} {
    padding: 40px 0;
    justify-content: center;

    .content {
      flex-direction: column-reverse;
    }

    .image {
      max-width: 500px; /* Limita a largura em telas médias */

      .virtual-glasses {
        max-width: 100%; /* Ocupa 100% do contêiner */
        height: auto; /* Mantém a proporção */
      }

      .arcle-icon {
        max-width: 100%; /* Limita o tamanho do ícone */
        height: auto; /* Mantém a proporção */
      }
    }
  }

  /* Ajustes para telas pequenas */
  ${device.small} {
    .content {
      padding: 25px;
      gap: 20px;
      flex-direction: column-reverse;
      justify-content: center;
    }

    .image {
      margin: auto;

      .virtual-glasses {
        max-width: 280px;
        height: auto;
      }

      .arcle-icon {
        max-width: 200px;
        width: 100%;
        height: auto;
      }
    }
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0;
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
      flex-direction: column;
      gap: 16px;

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
      font-size: 14px;
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
    height: auto;
    margin-top: 40px;

    .people {
      width: 100%;
      max-width: 690px;
      object-fit: cover;
    }

    .coments {
      position: absolute;
      max-width: 414px;
      width: 100%;
      height: auto;
      object-fit: cover;
      left: -50px;
      bottom: -20px;
      box-shadow: 0px 0.33px 0px #ced5dc;

      ${device.small} {
        display: none;
      }
    }
  }
`;

export const GameCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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
