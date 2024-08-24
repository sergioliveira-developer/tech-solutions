import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerGames = styled.div`
  display: flex;

  p {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    letter-spacing: -2%;
    text-align: left;
    color: ${theme.colors.white};
  }

  span {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    letter-spacing: -2%;
    color: #bd00ff;
  }

  .horizon {
    position: absolute;
    width: 448px;
    height: 519px;
    left: 256px;
    top: 2557px;

    &:hover {
      scale: 1.1;
    }
  }

  .ajax {
    position: absolute;
    width: 448px;
    height: 519px;
    left: 756px;
    top: 2557px;

    &:hover {
      scale: 1.1;
    }
  }

  .fight-night {
    position: absolute;
    width: 448px;
    height: 518px;
    left: 1256px;
    top: 2558px;

    &:hover {
      scale: 1.1;
    }
  }

  .call-of-duty {
    position: absolute;
    width: 448px;
    height: 519px;
    left: 1756px;
    top: 2557px;

    &:hover {
      scale: 1.1;
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
      font-style: normal;
      font-size: 1rem;
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
