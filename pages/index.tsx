/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import ArrowRight from '@geist-ui/react-icons/chevronRight';
import { Card } from '@geist-ui/react';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <h1 className={styles.heroText}>
          For over 5 years StartOut has been a safe place for hundreds of young
          (and not-so-young) people to receive mentorship from our amazing
          StartOut Role Models
        </h1>
        <Link href="/announcement" passHref={false}>
          <Card type="secondary" className={styles.clickable}>
            <Card.Content className={styles.announcementLinkCard}>
              <Link href="/announcement" passHref>
                <a className={styles.whiteText}>
                  StartOut announces handover to headspace&mdash;read the full
                  announcement here.
                </a>
              </Link>
            </Card.Content>
          </Card>
        </Link>
      </section>
    </>
  );
}
