import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  strong {
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.2rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.colors.white};
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;

  .twitter {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.625rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    color: ${theme.colors.white};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }

  .instagram {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.625rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;

    color: ${theme.colors.white};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }

  .discord {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.625rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    color: ${theme.colors.white};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }

  .facebook {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.625rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    color: ${theme.colors.white};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }
`;
