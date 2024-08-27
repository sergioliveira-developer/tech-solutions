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
      height: auto;
      border-radius: 4px;

      &:hover {
        opacity: 0.8;
        border: 3px solid rgba(189, 0, 255, 0.2);
        transition: all 100ms;
      }
    }

    div {
      span {
        font-weight: 700;
        font-size: 32px;
        line-height: 130%;
        letter-spacing: -2%;
        color: ${theme.colors.purpledark};
      }

      .ajax {
        max-width: 448px;
        height: auto;
        border-radius: 4px;

        &:hover {
          opacity: 0.8;
          border: 3px solid ${theme.colors.purpledark};
          transition: all 100ms;
        }
      }
    }

    .fight-night {
      max-width: 448px;
      height: auto;
      border-radius: 4px;

      &:hover {
        opacity: 0.8;
        border: 3px solid rgba(189, 0, 255, 0.2);
        transition: all 100ms;
      }
    }

    .call-of-duty {
      max-width: 448px;
      height: auto;
      border-radius: 4px;

      &:hover {
        opacity: 100%;
        border: 3px solid rgba(189, 0, 255, 0.2);
        transition: all 100ms;
      }
    }

    h2 {
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
