import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 5.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    line-height: auto;
    letter-spacing: 6%;
    color: #fff;
    width: 10.1875rem;
    height: 1.375rem;
  }

  h1 {
    font-size: 5rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -2%;
    color: #fff;
    width: 39.375rem;
    height: 18rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
    color: #fff;
    width: 28.5rem;
    height: 3rem;

    img {
      width: 1.375rem;
      height: 1.375rem;
      position: relative;
      top: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`;
