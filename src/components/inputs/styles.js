import styled from 'styled-components';
import { theme } from '../../styles/theme';

// Media Queries para telas grandes, médias e pequenas
const device = {
  medium: '@media (min-width: 768px) and (max-width: 1199px)', // Telas médias
  small: '@media (max-width: 768px)', // Telas pequenas
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;

  ${device.small} {
    flex: 1;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  gap: 16px;
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
  max-height: 46px;
  background: linear-gradient(
    90deg,
    rgba(25, 25, 35, 0.6),
    rgba(40, 40, 60, 0.6)
  );

  input {
    width: 250px;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: auto;
    letter-spacing: 0%;
    background: none;
    border: none;
    transition: all 300ms;

    &::placeholder {
      color: ${theme.colors.purple};
    }
  }

  ${device.small} {
    justify-content: center;
    gap: 8px;
    background: none;
  }
`;
