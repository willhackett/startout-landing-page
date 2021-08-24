/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import ArrowRight from '@geist-ui/react-icons/chevronRight';
import orderBy from 'lodash.orderby';

import {
  Section,
  Logo,
  Names,
  Person,
  SponsorLogos,
  HelpButton,
} from '../components';

import s from './index.module.css';

interface HomeProps {
  volunteers: Person[];
  mentors: Person[];
  board: Person[];
}

export default function Home({ volunteers, mentors, board }: HomeProps) {
  return (
    <>
      <Section background="image" nextTarget="volunteers">
        <header className={s.header}>
          <Link href="/">
            <a className={s.logo}>
              <Logo />
            </a>
          </Link>
          <HelpButton />
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
        <Names names={volunteers} />
      </Section>
      <a id="rolemodels" />
      <Section background="yellow" nextTarget="sponsors">
        <h1>Thanks, to our role models</h1>
        <h3 className={s.mb}>
          The people who worked hard to support those in need.
        </h3>
        <Names names={mentors} />
      </Section>
      <a id="sponsors" />
      <Section background="red" nextTarget="board">
        <h1>Thanks, to our amazing sponsors over the years</h1>
        <h3 className={s.mb}>
          Your ongoing support has kept us going. To the 1000+ donors, you know
          who you are and you made a real difference.
        </h3>
        <SponsorLogos />
      </Section>
      <a id="board" />
      <Section background="gray">
        {' '}
        <h1>Thanks, to our board</h1>
        <h3 className={s.mb}>
          The people who brought us together to make an impact.
        </h3>
        <Names names={board} />
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

export const getStaticProps = () => {
  const credits = require('../credits.json');
  const volunteers = orderBy(credits.volunteers, 'name');
  const mentors = orderBy(credits.mentors, 'name');
  const board = orderBy(credits.board, 'name');

  return {
    props: {
      volunteers,
      mentors,
      board,
    },
  };
};
