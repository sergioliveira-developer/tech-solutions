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
    flex-direction: row;
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
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 12px;
    }
  }

  /* Media queries para responsividade */
  @media (max-width: 1024px) {
    padding: 24px 32px;

    h3 {
      font-size: 22px;
    }

    .description p {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 28px;
    gap: 8px;

    h3 {
      font-size: 20px;
    }

    .description p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    padding: 16px 20px;
    gap: 6px;

    h3 {
      font-size: 18px;
    }

    .description p {
      font-size: 12px;
    }
  }
`;
