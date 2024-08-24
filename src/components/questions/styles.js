import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 150px;
    height: 73px;
    left: 860px;
    top: 3208px;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 130%;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};
  }

  .customer-support1 {
    display: flex;
    justify-content: flex-start;
    gap: 12.75rem;
    padding: 2rem 2.5rem;
    position: absolute;
    left: 496px;
    top: 3333px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    text-align: left;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};

    img {
      width: 1.9375rem;
      height: 1.9375rem;
      padding: 5px;
    }
  }

  .product-description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 1.875rem 2.5625rem 2.125rem 2.4375rem;
    position: absolute;
    left: 496px;
    top: 3452px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    text-align: left;

    div {
      display: flex;
      gap: 28.4375rem;

      h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.02em;
        color: ${theme.colors.white};

        img {
          width: 1.9375rem;
          height: 1.9375rem;
          padding: 5px;
        }
      }
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: ${theme.colors.white};
    }
  }

  .customer-support2 {
    display: flex;
    justify-content: flex-start;
    gap: 13.625rem;
    padding: 2rem 2.5rem;
    position: absolute;
    left: 496px;
    top: 3784px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    text-align: left;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};

    img {
      width: 1.9375rem;
      height: 1.9375rem;
      padding: 5px;
    }
  }
  .customer-support3 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16.875rem;
    padding: 2rem 2.5rem;
    position: absolute;
    left: 496px;
    top: 3903px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    text-align: left;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};

    img {
      width: 1.9375rem;
      height: 1.9375rem;
      padding: 5px;
    }
  }
`;
