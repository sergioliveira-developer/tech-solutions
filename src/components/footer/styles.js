import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.8);
    max-width: 385px;
    text-align: left;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: ${theme.colors.white};
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 256px;
    gap: 40px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    max-width: 1920px;

    .container-contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 214px;
      gap: 24px;
      max-width: 168px;
      width: 100%;
      color: ${theme.colors.white};
    }

    .container-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;
      width: 100%;
      color: ${theme.colors.white};
    }

    .container-company {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;
      width: 100%;
      color: ${theme.colors.white};
    }

    .container-newsletter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;
      width: 100%;
      color: ${theme.colors.white};

      .container-subscribe {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0px 0px 0px 24px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        max-width: 446px;

        input {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          max-width: 138px;
          margin-right: 152px;
          color: ${theme.colors.purple};
          border: none;
          background: none;
          filter: drop-shadow(0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25));

          &::placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: left;
            color: rgba(255, 255, 255, 0.8);
          }
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 22px 29px;
          background: ${theme.colors.lightblue};
          border: none;
          border-radius: 0px 4px 4px 0px;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
          box-shadow: 0px 20px 49px rgba(61, 222, 237, 0.17);
          color: ${theme.colors.darkpurple};

          &:hover {
            opacity: 0.6;
            transition: 0.5s ease-in-out;
          }
        }
      }
    }
  }

  .reserved {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 256px 80px;
    gap: 32px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    height: auto;

    p {
      max-width: 348px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
