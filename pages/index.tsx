/* eslint-disable @next/next/link-passhref */
import cx from 'classnames';
import Link from 'next/link';
import ArrowRight from '@geist-ui/react-icons/chevronRight';
import { Card } from '@geist-ui/react';
import styles from './index.module.css';
import { Section, Logo } from '../components';

export default function Home() {
  return (
    <>
      <Section background="image" nextTarget="volunteers">
        <header>
          <Link href="/">
            <a className={styles.logo}>
              <Logo />
            </a>
          </Link>
        </header>

        <div className={styles.introduction}>
          <h1>
            For over 5 years StartOut has been a safe place for hundreds of
            young (and not-so-young) people to receive mentorship from our
            amazing StartOut Role Models.
          </h1>
          <Link href="/announcement" passHref>
            <a className={styles.whiteText}>
              Read our full announcement here <ArrowRight />
            </a>
          </Link>
        </div>
      </Section>
      <a id="volunteers" />
      <Section background="green" nextTarget="rolemodels">
        <h1>Thanks, to our volunteers</h1>
        <h3>The managers, designers and engineers that made StartOut work.</h3>
      </Section>
      <a id="rolemodels" />
      <Section background="yellow" nextTarget="sponsors">
        <h1>Thanks, to our role models</h1>
        <h3>The people who worked hard to support those in need.</h3>
      </Section>
      <a id="sponsors" />
      <Section background="red" nextTarget="board">
        <h1>Thanks, to our 1000+ sponsors</h1>
        <h3>Your ongoing support has made kept us going.</h3>
      </Section>
      <a id="board" />
      <Section background="gray">
        {' '}
        <h1>Thanks, to our board</h1>
        <h3>The people who brought us together to make an impact.</h3>
      </Section>
    </>
  );
}
