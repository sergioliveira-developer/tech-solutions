import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.6);
    max-width: 385px;
    text-align: left;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: ${theme.colors.white};
  }

  a {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 12px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px 256px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    max-width: 1920px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 40px 20px;
      gap: 40px;
    }

    .contact-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: ${theme.colors.white};

      p {
        margin-top: 10px;
        color: rgba(255, 255, 255, 0.6);
      }
    }

    .informations-links {
      display: flex;
      gap: 60px;

      @media screen and (max-width: 768px) {
        flex-direction: row;
        gap: 20px;
        align-items: center;
      }
    }

    .header-container,
    .company-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 150px;
    }

    .newsletter-container {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .subscribe-container {
        display: flex;
        width: 100%;
        max-width: 400px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;

        input {
          width: 100%;
          padding: 12px 24px;
          border: none;
          background: none;
          color: ${theme.colors.white};
          font-size: 14px;

          &::placeholder {
            color: rgba(255, 255, 255, 0.6);
          }
        }

        button {
          padding: 12px 24px;
          background: ${theme.colors.lightblue};
          border: none;
          color: ${theme.colors.darkpurple};
          font-weight: 700;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
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
    padding: 20px;
    gap: 20px;
    background: rgba(255, 255, 255, 0.05);

    img {
      max-width: 1410px;
    }

    p {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.6);
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 10px;

      img {
        display: none;
      }
    }
  }
`;
