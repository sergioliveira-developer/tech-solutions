import React, { useEffect, useState } from 'react';

import ArrowForward2 from '../../assets/arrow-forward2.svg';
import Horizon from '../../assets/card-horizon.png';
import Ajax from '../../assets/card-alyx.png';
import FightNight from '../../assets/card-fight-night.png';
import CallofDuty from '../../assets/card-call-of-duty.png';

import { ContainerGames, TopGames } from './styles';
import { ContainerMain } from '../Home/styles';

export const PageCardsGames = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfSlides = 8; // Total de cards
  const numberOfSlidesPerRow = 3; // Número de cards por vez
  const cardWidth = 33.33; // Porcentagem da largura do card
  const gap = 48; // Gap fixo entre os cards em pixels

  const totalTranslateX =
    currentIndex * (cardWidth + (gap / window.innerWidth) * 100);

  useEffect(() => {
    console.log('currentIndex', {
      currentIndex,
      // transform: `translateX(-${currentIndex * 30}%)`,
      // transform: `translateX(-${currentIndex * (33 + (48 / window.innerWidth) * 100)}%)`,
    });
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex < numberOfSlides - numberOfSlidesPerRow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <ContainerGames>
      <ContainerMain>
        <TopGames>
          <h1>Top Games</h1>

          <p>
            If you buy video 2 games, you will receive 1
            <br />
            video game for free, along with a <span>50%</span> discount.
          </p>

          <div className="container-buttons">
            <button onClick={prevSlide} disabled={currentIndex === 0}>
              <img
                className="arrow-left"
                src={ArrowForward2}
                alt="arrow-left"
              />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= numberOfSlides - numberOfSlidesPerRow}
            >
              <img src={ArrowForward2} alt="arrow-right" />
            </button>
          </div>
        </TopGames>

        <div
          className="cards-games"
          style={{
            // transform: `translateX(-${currentIndex * 30}%)`,
            // transform: `translateX(-${(currentIndex * 100) / numberOfSlidesPerRow}%)`,
            // transform: `translateX(-${currentIndex * (33 + (48 / window.innerWidth) * 100)}%)`,
            // transform: `translateX(-${currentIndex * totalCardWidth}%)`,
            transform: `translateX(-${totalTranslateX}%)`,
          }}
        >
          <div>
            <img className="horizon" src={Horizon} />
            <h2>Horizon : Call of the mountain</h2>
          </div>

          <div>
            <img className="ajax" src={Ajax} />
            <span>Half - Life : ALYX</span>
          </div>

          <div>
            <img className="fight-night" src={FightNight} />
            <h2>Fight Night : Champion</h2>
          </div>

          <div>
            <img className="call-of-duty" src={CallofDuty} />
            <h2>Call of Duty : Cold War</h2>
          </div>
        </div>
      </ContainerMain>
    </ContainerGames>
  );
};
