import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  background-color: ${(props) =>
    props.theme === 'blue' ? theme.colors.lightblue : 'transparent'};
  color: ${(props) =>
    props.theme === 'blue' ? theme.colors.dark : theme.colors.white};
  border-radius: 0.25rem;
  border: ${(props) =>
    props.theme === 'blue' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'};
  box-shadow: 0px 20px 49px rgba(61, 222, 237, 0.17);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: auto;
  text-align: center;
  letter-spacing: 0%;

  &:hover {
    opacity: 0.6;
    transition: 0.5s ease-in-out;
  }
`;
