import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 80px 0;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 56px;
      line-height: 130%;
      text-align: center;
      letter-spacing: -0.02em;
      color: ${theme.colors.white};
    }
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

  .customer-support1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 32px 40px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;

    h3 {
      margin-right: 204px;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: -0.02em;
      text-align: left;
      color: ${theme.colors.white};
    }
  }

  .product-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    padding: 32px 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      h3 {
        margin-right: 455px;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.02em;
        text-align: left;
        color: ${theme.colors.white};
      }
    }

    .description {
      max-width: 848px;

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: ${theme.colors.white};
      }
    }
  }

  .customer-support2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 32px 40px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;

    h3 {
      margin-right: 218px;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: -0.02em;
      text-align: left;
      color: ${theme.colors.white};
    }
  }

  .customer-support3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 32px 40px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;

    h3 {
      margin-right: 270px;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: -0.02em;
      text-align: left;
      color: ${theme.colors.white};
    }
  }
`;
