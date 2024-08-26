import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerGames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .cards-games {
    display: flex;
    gap: 48px;
    width: 100%;

    .horizon {
      max-width: 448px;
      height: 519px;

      &:hover {
        scale: 1.1;
      }
    }

    .ajax {
      max-width: 448px;
      height: 519px;

      span {
        font-weight: 700;
        font-size: 32px;
        line-height: 130%;
        letter-spacing: -2%;
        color: #bd00ff;
      }

      &:hover {
        scale: 1.1;
      }
    }

    .fight-night {
      max-width: 448px;
      height: 518px;

      &:hover {
        scale: 1.1;
      }
    }

    .call-of-duty {
      max-width: 448px;
      height: 519px;

      /* &:hover {
        scale: 1.1;
      } */
    }

    p {
      max-width: 448px;
      font-weight: 700;
      font-size: 32px;
      line-height: 130%;
      letter-spacing: -2%;
      text-align: left;
      color: ${theme.colors.white};
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
