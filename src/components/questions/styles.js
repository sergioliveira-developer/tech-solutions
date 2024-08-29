import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding: 80px 0;
  max-width: 928px;
  margin: 0 auto;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 130%;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};
    margin-bottom: 32px;
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    img {
      width: 21px;
      height: 21px;
    }
  }
`;
