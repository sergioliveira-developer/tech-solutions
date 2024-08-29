import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 32px 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 300ms;
  width: 100%;
  margin-bottom: 24px;
  cursor: pointer;

  &.opened {
    background: rgba(255, 255, 255, 0.1);
    transition: all 300ms;
  }

  .title {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: -0.02em;
    text-align: left;
    color: ${theme.colors.white};
  }

  .description {
    width: 100%;
    cursor: text;

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: ${theme.colors.white};
      margin-bottom: 12px;
    }
  }
`;
