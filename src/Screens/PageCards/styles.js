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
