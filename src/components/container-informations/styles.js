import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -2%;
    color: ${theme.colors.white};
  }

  div {
    display: flex;
    gap: 2rem;
    padding: 0;

    p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: 0%;
      color: ${theme.colors.white};

      img {
        width: 1.375rem;
        height: 1.375rem;
        position: relative;
        top: 0.25rem;
      }
    }
  }
`;
