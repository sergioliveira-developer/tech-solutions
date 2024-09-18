import styled from 'styled-components';
import { theme } from '../../styles/theme';

// Media Queries para telas grandes, médias e pequenas
const device = {
  medium: '@media (min-width: 768px) and (max-width: 1199px)', // Telas médias
  small: '@media (max-width: 768px)', // Telas pequenas
};

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  gap: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  max-width: 336px;
  width: 100%;
  max-height: 46px;

  input {
    max-width: 250px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: auto;
    letter-spacing: 0%;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    flex-grow: 1;
    transition: all 300ms;

    &::placeholder {
      color: ${theme.colors.white};
    }
  }

  ${device.small} {
    background: none;
  }
`;
