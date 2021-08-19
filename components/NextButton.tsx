import ArrowDown from '@geist-ui/react-icons/chevronDown';
import { MouseEvent } from 'react';

import s from './NextButton.module.css';

interface NextButtonProps {
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const NextButton = ({ onClick }: NextButtonProps) => (
  <a className={s.NextButton} onClick={onClick}>
    <ArrowDown size="100" color="white" strokeWidth="0.5" />
  </a>
);

export { NextButton };
