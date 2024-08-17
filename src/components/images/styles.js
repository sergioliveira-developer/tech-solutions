import { styled } from 'styled-components';

export const ContainerImg = styled.div`
  display: flex;
  justify-content: flex-start;
  width: ${(props) => (props.image === 'glasses' ? ' 47.375rem' : '61.625rem')};
  height: ${(props) => (props.image === 'glasses' ? '32.75rem' : '39rem')};
`;
