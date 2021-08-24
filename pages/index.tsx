/* eslint-disable @next/next/link-passhref */
import cx from 'classnames';
import Link from 'next/link';
import ArrowRight from '@geist-ui/react-icons/chevronRight';
import { Card } from '@geist-ui/react';
import s from './index.module.css';
import { Section, Logo, Names } from '../components';

import credits from '../credits.json';

export default function Home() {
  return (
    <>
      <Section background="image" nextTarget="volunteers">
        <header>
          <Link href="/">
            <a className={s.logo}>
              <Logo />
            </a>
          </Link>
        </header>

        <div className={s.introduction}>
          <h1>
            For over 5 years, StartOut has been a safe space for hundreds of
            young (and not-so-young) people to receive mentorship from our
            amazing Role Models.
          </h1>
          <Link href="/announcement" passHref>
            <a className={s.whiteText}>
              Read our full announcement here <ArrowRight />
            </a>
          </Link>
        </div>
      </Section>
      <a id="volunteers" />
      <Section background="green" nextTarget="rolemodels">
        <h1>Thanks, to our volunteers</h1>
        <h3 className={s.mb}>
          The managers, designers and engineers that made StartOut work.
        </h3>
        <Names names={credits.volunteers} />
      </Section>
      <a id="rolemodels" />
      <Section background="yellow" nextTarget="sponsors">
        <h1>Thanks, to our role models</h1>
        <h3 className={s.mb}>
          The people who worked hard to support those in need.
        </h3>
        <Names names={credits.mentors} />
      </Section>
      <a id="sponsors" />
      <Section background="red" nextTarget="board">
        <h1>Thanks, to our 1000+ sponsors</h1>
        <h3 className={s.mb}>Your ongoing support has made kept us going.</h3>
      </Section>
      <a id="board" />
      <Section background="gray">
        {' '}
        <h1>Thanks, to our board</h1>
        <h3 className={s.mb}>
          The people who brought us together to make an impact.
        </h3>
        <Names names={credits.board} />
      </Section>
      <Section background="blue" small>
        <p>
          Copyright © StartOut Australia. <br />
          Made with ❤︎ in Australia.
        </p>
      </Section>
    </>
  );
}
