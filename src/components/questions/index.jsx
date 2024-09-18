import { MainContainer } from '../../Screens/Home/styles';
import { Question } from '../question';
import { ContainerQuestions } from './styles';

export function QuestionBoard() {
  return (
    <ContainerQuestions>
      <MainContainer>
        <div className="title">
          <h1>F.A.Q</h1>
        </div>

        <Question title="What are the different types of virtual headsets available ?">
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
        </Question>

        <Question title="How does a virtual headset work ?">
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
        </Question>

        <Question title="Do I need a powerful computer to use a virtual headset ?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            officiis velit totam itaque consectetur dignissimos aut ratione,
            quas optio ipsa eveniet doloribus quaerat placeat, quo quidem eum
            numquam architecto quibusdam.
          </p>
        </Question>

        <Question title="What are the main applications of virtual headsets ?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            modi veniam veritatis nemo dolore. Provident ex officiis nulla
            aspernatur ut, numquam sit, quo, corporis cumque deleniti dicta
            adipisci. Ipsum, reprehenderit.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            minima fuga incidunt tempore dolorum enim eaque sunt hic? Rerum
            alias in qui voluptates consectetur perspiciatis aut accusantium
            sunt cumque. Saepe?
          </p>
        </Question>
      </MainContainer>
    </ContainerQuestions>
  );
}
