import ArrowDown from '@geist-ui/react-icons/chevronDown';
import { MouseEvent } from 'react';

import s from './NextButton.module.css';

interface NextButtonProps {
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
  color: string;
}

const NextButton = ({ onClick, color }: NextButtonProps) => (
  <a className={s.NextButton} onClick={onClick}>
    <ArrowDown size="100" color={color} strokeWidth="0.5" />
  </a>
);

export { NextButton };
