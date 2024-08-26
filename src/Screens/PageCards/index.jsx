import React, { useRef } from 'react';

import ArrowForward2 from '../../assets/arrow-forward2.svg';
import Horizon from '../../assets/card-horizon.png';
import Ajax from '../../assets/card-alyx.png';
import FightNight from '../../assets/card-fight-night.png';
import CallofDuty from '../../assets/card-call-of-duty.png';

import { ContainerGames, TopGames } from './styles';
import { ContainerMain } from '../Home/styles';

export const PageCardsGames = () => {
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
            <button>
              <img
                className="arrow-left"
                src={ArrowForward2}
                alt="arrow-left"
              />
            </button>

            <button>
              <img src={ArrowForward2} alt="arrow-right" />
            </button>
          </div>
        </TopGames>

        <div className="cards-games">
          <div className="horizon">
            <img src={Horizon} />
            <p>Horizon : Call of the mountain</p>
          </div>

          <div className="ajax">
            <img src={Ajax} />
            <span>Half - Life : ALYX</span>
          </div>

          <div className="fight-night">
            <img src={FightNight} />
            <p>Fight Night : Champion</p>
          </div>

          <div className="call-of-duty">
            <img src={CallofDuty} />
            <p>Call of Duty</p>
          </div>
        </div>
      </ContainerMain>
    </ContainerGames>
  );
};
