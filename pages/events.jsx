import React from 'react';
import Layout from '@/components/layout/Layout';
import HeadingTitle from '@/components/headingTitle/HeadingTitle';
import styles from '../styles/Events.module.scss';
import Image from 'next/legacy/image';
import EtsyCta from '../components/welcome/EtsyCta';

const events = () => {
  return (
    <Layout
      content="Women's Luxurious Clothing | Find out where we will be at upcoming events! Stay up-to-date on where to find us and what we will be showcasing by visiting this page."
      title="Women's Luxurious Clothing By Leopardi Will Make An Appearance At These shows This Year."
    >
      <div className={styles.events}>
        <div className="container">
          <div className={styles.events__title}>
            <HeadingTitle>
              Our Events In {new Date().getFullYear()}
            </HeadingTitle>
          </div>
          <div
            className={styles.events__content}
            style={{ marginBottom: '5rem' }}
          >
            <div className={styles['events__content--left']}>
              <h1 style={{ textAlign: 'center', paddingBottom: '3rem' }}>
                Leopardi’s Occasional Women’s Wear will be showcased at the
                following events this year:
              </h1>
              <p>
                <span>4th April:</span>4th April: LadyTaverners Luncheon at The
                Graduate Hotel, Cambridge.
              </p>
              <p>
                <span>16th May:</span> Sick Childrens Trust Charity Luncheon at
                Madingley Hall, Cambridge.
              </p>
              <p>
                <span>9th - 11th June:</span> Wealden Times Summer Fair at Hole
                Park, Rolvenden TN17 4JB
              </p>
              {/* <p>
                <span>22nd - 24th June:</span> The Lincolnshire Show. The Mews
                Eighth Avenue. Lincolnshire Showground. LN2 2NA
              </p> */}
              <p>
                <span>5th October:</span> Friends of Essex Churches Trust Gift
                Fair, Hylands House,Hylands Park, Chelmsford. CM2 8WQ
              </p>
              <p>
                <span>16th - 19th Nov.</span> Ely Cathedral Christmas Fair, Ely,
                CB7 4DL (TBC)
              </p>
              {/* <p>
                <span>25th - 27th Nov.</span> Presents Galore Christmas Charity
                Fair, Rowley Mile, Newmarket, CB8 0TF
              </p> */}
              <p>
                <span>24th - 27th Nov.</span> The Burghley Christmas Fair,
                Burghley House, Stamford, Lincolnshire.
              </p>
            </div>
            <div className={styles['events__content--right']}>
              <Image
                src="/assets/jackets.jpg"
                alt="events"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <EtsyCta
            pic="/assets/banner-1.webp"
            text1="Are you interested in exploring our comprehensive ranges?"
            text2="Visit our Etsy store to discover more."
            alt="Silk and cashmere Mid Length coats on a rack"
            margin="0 0 5rem 0"
          />
        </div>
      </div>
    </Layout>
  );
};

export default events;
