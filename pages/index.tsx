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
  Headspace,
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
      <Section background="image" nextTarget="details">
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
      <a id="details" />

      <Section background="gray" small nextTarget="volunteers">
        <p className={s.mb}>
          {'"'}StartOut has been a safe place for hundreds of young (and
          not-so-young) people to receive mentorship from our amazing StartOut
          Role Models via our digital platforms, as well as many tens of
          thousands more people we met at events all around the
          country and through our website and social media channels. We are
          excited to redirect our website and people who need support to
          headspace and qheadspace, who provide support to thousands of young
          people every year{'"'} —{' '}
          <Link href="/announcement" passHref>
            <a className={s.whiteText}>Read our full announcement.</a>
          </Link>
        </p>
        <div className={s.Center}>
          <a
            href="https://www.headspace.org.au/?ref=startout"
            className={s.HeadspaceButton}
          >
            <Headspace />
          </a>
        </div>
      </Section>
      <a id="volunteers" />
      <Section background="green" nextTarget="rolemodels">
        <h1>Thanks, to our core team</h1>
        <h3 className={s.mb}>
          The managers, designers and engineers that made StartOut work over the years.
        </h3>
        <Names names={volunteers} />
      </Section>
      <a id="rolemodels" />
      <Section background="yellow" nextTarget="sponsors">
        <h1>Thanks, to our role models</h1>
        <h3 className={s.mb}>
          The people who worked hard to support those in need.
        </h3>
        <Names names={mentors} mentors />
      </Section>
      <a id="sponsors" />
      <Section background="red" nextTarget="board">
        <h1>Thanks, to our amazing sponsors</h1>
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
        <div className={s.Footer}>
          <div>
            <p>
              Copyright © StartOut Australia. <br />
              Made with ❤︎ in Australia.
            </p>
          </div>
          <div className={s.FooterRight}>
            <p>
              Looking for support or to help a good cause?
              <br />
              <a
                className={s.whiteText}
                href="https://www.headspace.org.au/eheadspace/?ref=startout"
              >
                Check out eHeadspace &mdash; a place do just that
              </a>
            </p>
          </div>
        </div>
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
