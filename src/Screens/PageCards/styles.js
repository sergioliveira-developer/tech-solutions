import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerGames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .cards-games {
    display: flex;
    gap: 48px; /* Gap de 48px entre os cards */
    width: 100%;
    transition: transform 0.3s ease;

    .card {
      cursor: pointer;
      flex: 0 0 33%; /* Cada card ocupa 33% da largura do container */

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
    }
  }
`;

export const TopGames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};
  }

  p {
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};

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
    gap: 16px;

    button {
      background: rgba(50, 116, 248, 0.12);
      padding: 16px;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;

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
