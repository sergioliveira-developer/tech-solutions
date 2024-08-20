import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    position: absolute;
    left: 256px;
    top: 174px;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
  }

  h1 {
    position: absolute;
    width: 630px;
    height: 288px;
    left: 256px;
    top: 228px;
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
    position: absolute;
    left: 256px;
    top: 556px;
  }

  p {
    position: absolute;
    width: 456px;
    height: 48px;
    left: 290px;
    top: 556px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.8);
  }
`;
