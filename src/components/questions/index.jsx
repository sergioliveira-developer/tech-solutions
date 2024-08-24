import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg';

import { Container } from './styles';

export function QuestionBoard() {
  return (
    <Container>
      <div className="title">
        F.A.Q
      </div>

      <div className="customer-support1">
        <p>What are the different types of virtual headsets available?</p>

        <img src={ArrowDown} alt="arrow" />
      </div>

      <div className="product-description">
        <div>
          <h3>How does a virtual headset work?</h3>

          <img src={ArrowUp} alt="arrow" />
        </div>

        <p>
          Virtual headsets are equipped with various sensors to track the user's
          movements. These sensors can
          <br />
          include accelerometers, gyroscopes, and sometimes external cameras or
          base stations. They constantly
          <br />
          monitor the position and orientation of the headset and sometimes the
          user's hand controllers.
          <br />
          The headset has one or two high-resolution displays, one for each eye,
          positioned in front of the user's eyes.
          <br />
          These displays show stereoscopic 3D images, creating a sense of depth
          and immersion. Between the
          <br />
          displays and the user's eyes, help focus the images and adjust them
          for the user's field of view.
        </p>
      </div>

      <div className="customer-support2">
        Do I need a powerful computer to use a virtual headset?
        <div>
          <img src={ArrowDown} alt="arrow" />
        </div>
      </div>

      <div className="customer-support3">
        What are the main applications of virtual headsets?
        <div>
          <img src={ArrowDown} alt="arrow" />
        </div>
      </div>
    </Container>
  );
}
