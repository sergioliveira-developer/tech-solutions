import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg';

import { ContainerQuestions } from './styles';

export function QuestionBoard() {
  return (
    <ContainerQuestions>
      <div className="title">
        <h1>F.A.Q</h1>
      </div>

      <div className="customer-support1">
        <h3>What are the different types of virtual headsets available ?</h3>

        <div className="arrow">
          <img src={ArrowDown} alt="arrow" />
        </div>
      </div>

      <div className="product-description">
        <div>
          <h3>How does a virtual headset work ?</h3>

          <div className="arrow">
            <img src={ArrowUp} alt="arrow" />
          </div>
        </div>

        <div className="description">
          <p>
            Virtual headsets are equipped with various sensors to track the
            user's movements. These sensors can include accelerometers,
            gyroscopes, and sometimes external cameras or base stations. They
            constantly monitor the position and orientation of the headset and
            sometimes the user's hand controllers.
            <br />
            <br />
            The headset has one or two high-resolution displays, one for each
            eye, positioned in front of the user's eyes. These displays show
            stereoscopic 3D images, creating a sense of depth and immersion.
            Between the displays and the user's eyes, help focus the images and
            adjust them for the user's field of view.
          </p>
        </div>
      </div>

      <div className="customer-support2">
        <h3>Do I need a powerful computer to use a virtual headset ?</h3>

        <div className="arrow">
          <img src={ArrowDown} alt="arrow" />
        </div>
      </div>

      <div className="customer-support3">
        <h3>What are the main applications of virtual headsets ?</h3>

        <div className="arrow">
          <img src={ArrowDown} alt="arrow" />
        </div>
      </div>
    </ContainerQuestions>
  );
}
