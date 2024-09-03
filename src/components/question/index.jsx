import { useState } from 'react';
import ArrowDown from '../../../public/arrow-down.svg';
import ArrowUp from '../../../public/arrow-up.svg';

import { QuestionContainer } from './styles';

export function Question({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <QuestionContainer
      className={open ? 'faq opened' : 'faq'}
      onClick={() => setOpen(!open)}
    >
      <div className="title">
        <h3>{title}</h3>

        <div className="arrow">
          <img src={open ? ArrowDown : ArrowUp} alt="arrow" />
        </div>
      </div>

      {open && <div className="description">{children}</div>}
    </QuestionContainer>
  );
}
