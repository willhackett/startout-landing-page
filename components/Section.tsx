import { MouseEvent, ReactNode } from 'react';
import cx from 'classnames';
import { scroller } from 'react-scroll';

import { NextButton } from './';

import s from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  background: 'image' | 'grey' | 'blue' | 'red' | 'green' | 'yellow' | 'gray';
  nextTarget?: string;
}

const smoothlyScroll =
  (target: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scroller.scrollTo(target, { duration: 500, smooth: true });
  };

const Section = ({ children, background, nextTarget }: SectionProps) => {
  const classes = cx(s.Section, {
    [s.image]: 'image' === background,
    [s.gray]: 'gray' === background,
    [s.blue]: 'blue' === background,
    [s.red]: 'red' === background,
    [s.green]: 'green' === background,
    [s.yellow]: 'yellow' === background,
  });

  return (
    <section className={classes}>
      {background === 'image' ? <div className={s.ImageOverlay} /> : undefined}
      <div className={s.Content}>
        {children}
        <div className={s.Centered}>
          {nextTarget && <NextButton onClick={smoothlyScroll(nextTarget)} />}
        </div>
      </div>
    </section>
  );
};

export { Section };
