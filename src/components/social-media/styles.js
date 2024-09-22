import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const IconsGroup = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  cursor: pointer;

  .twitter {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.625rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
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
