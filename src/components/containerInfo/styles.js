import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    line-height: auto;
    letter-spacing: 6%;
    color: ${theme.colors.white};
    width: 10.1875rem;
    height: 1.375rem;
  }

  h1 {
    font-size: 5rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -2%;
    color: ${theme.colors.white};
    width: 39.375rem;
    height: 18rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
    color: ${theme.colors.white};
    width: 28.5rem;
    height: 3rem;

    img {
      width: 1.375rem;
      height: 1.375rem;
      position: relative;
      top: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`;
