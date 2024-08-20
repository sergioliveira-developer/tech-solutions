import Horizon from '../../assets/card-horizon.svg';
import Ajax from '../../assets/card-ajax.svg';
import FightNight from '../../assets/card-fight-night.svg';
import CallofDuty from '../../assets/card-call-of-duty.svg';

import { ContainerGames } from './styles';

export function PageCardsGames() {
  return (
    <ContainerGames>
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
    </ContainerGames>
  );
}
