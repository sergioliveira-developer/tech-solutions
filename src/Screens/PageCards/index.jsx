import React, { useRef } from 'react';

import ArrowForward2 from '../../assets/arrow-forward2.svg';
import Horizon from '../../assets/card-horizon.svg';
import Ajax from '../../assets/card-ajax.svg';
import FightNight from '../../assets/card-fight-night.svg';
import CallofDuty from '../../assets/card-call-of-duty.svg';

import { ContainerGames, TopGames } from './styles';

export const PageCardsGames = () => {
  const cardsgames = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ behavior: 'smooth' });
  };

  return (
    <ContainerGames ref={cardsgames}>
      <TopGames>
        <h1>Top Games</h1>

        <p>
          If you buy video 2 games, you will receive 1
          <br />
          video game for free, along with a <span>50%</span> discount.
        </p>

        <div className="container-buttons">
          <button onClick={scrollLeft}>
            <img className="arrow-left" src={ArrowForward2} alt="arrow-left" />
          </button>

          <button onClick={scrollRight}>
            <img src={ArrowForward2} alt="arrow-right" />
          </button>
        </div>
      </TopGames>

      <div>
        <div className="horizon">
          <p>
            <img src={Horizon} />
            Horizon : Call of the mountain
          </p>
        </div>

        <div className="ajax">
          <span>
            <img src={Ajax} />
            Half - Life : ALYX
          </span>
        </div>

        <div className="fight-night">
          <p>
            <img src={FightNight} />
            Fight Night Champion
          </p>
        </div>

        <div className="call-of-duty">
          <p>
            <img src={CallofDuty} />
            <br />
            Call of Duty : Coold War
          </p>
        </div>
      </div>
    </ContainerGames>
  );
};
