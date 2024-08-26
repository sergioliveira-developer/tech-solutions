import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
  }

  h1 {
    max-width: 560px;
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};
  }

  img {
    width: 1.375rem;
    height: 1.375rem;
  }

  .description {
    display: flex;
    gap: 12px;
  }

  p {
    width: 456px;
    height: 48px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.8);
  }
`;
