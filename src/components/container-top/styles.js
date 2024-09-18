import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
  }

  h1 {
    max-width: 560px;
    font-style: normal;
    font-weight: 700;
    font-size: 80px; /* Tamanho grande para telas maiores */
    line-height: 120%;
    letter-spacing: -0.02em;
    color: ${({ color }) => color}; /* Usando a cor passada via props */
  }

  img {
    width: 1.375rem;
    height: 1.375rem;
  }

  .description {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  p {
    max-width: 456px;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.8);
  }

  /* Ajustes de responsividade para telas menores */
  @media (max-width: 1024px) {
    h1 {
      font-size: 60px;
    }

    p {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    gap: 30px;

    h1 {
      font-size: 48px;
    }

    p {
      font-size: 14px;
      line-height: 140%;
      width: 100%;
    }

    .description {
      gap: 8px;
    }
  }

  @media (max-width: 480px) {
    gap: 32px;

    h1 {
      font-size: 44px;
      max-width: 345px;
      line-height: 110%;
    }

    .description {
      display: flex;
      gap: 6px;

      img {
        width: 1.2rem;
        height: 1.2rem;
      }

      p {
        max-width: 315px;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0%;
        width: 100%;
      }
    }
  }
`;
