import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerGames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  .cards-games {
    display: flex;
    gap: 48px;
    width: 100%;
    transition: transform 0.3s ease;
    will-change: transform; /* Melhora a performance de animações */

    @media (max-width: 1024px) {
      gap: 24px;
    }

    @media (max-width: 768px) {
      gap: 16px;
    }

    .card {
      cursor: pointer;
      flex: 0 0 33%; /* Cada card ocupa 33% da largura do container */

      @media (max-width: 1024px) {
        flex: 0 0 45%; /* Em tablets, ocupa 45% */
      }

      @media (max-width: 768px) {
        flex: 0 0 68%; /* Em celulares, ocupa 70% */
      }

      @media (max-width: 480px) {
        flex: 0 0 70%; /* Em telas pequenas, cada card ocupa 70% */
      }

      &:hover {
        transition: all 300ms;

        img {
          border: 3px solid ${theme.colors.purpledark};
          transition: all 300ms;
        }

        h2 {
          color: ${theme.colors.purpledark};
          transition: all 300ms;
        }
      }

      img {
        border: 3px solid transparent;
        border-radius: 4px;
        width: 100%;
      }

      h2 {
        font-weight: 700;
        font-size: 32px;
        line-height: 130%;
        letter-spacing: -2%;
        text-align: left;
        color: ${theme.colors.white};
        transition: all 300ms;

        @media (max-width: 768px) {
          font-size: 24px;
        }

        @media (max-width: 480px) {
          font-size: 18px;
        }
      }
    }
  }
`;

export const TopGames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 24px;
    padding: 40px 0;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 480px) {
      font-size: 32px;
    }
  }

  p {
    max-width: 351px;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: rgba(255, 255, 255, 0.6);

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }

    span {
      font-style: normal;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0%;
      color: ${theme.colors.lightblue};
    }
  }

  .container-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px;
    gap: 16px;

    @media (max-width: 768px) {
      padding: 12px;
      gap: 12px;
    }

    @media (max-width: 480px) {
      padding: 12px;
      gap: 8px;
    }

    button {
      background: rgba(50, 116, 248, 0.12);
      padding: 16px;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;

      @media (max-width: 480px) {
        padding: 12px; /* Botão menor em telas pequenas */
      }

      &:hover {
        opacity: 0.6;
        transition: 0.5s ease-in-out;
      }

      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }
  }

  .arrow-left {
    transform: rotate(180deg);
  }
`;
