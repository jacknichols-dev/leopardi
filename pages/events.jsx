import React from 'react';
import Layout from '@/components/layout/Layout';
import HeadingTitle from '@/components/headingTitle/HeadingTitle';
import styles from '../styles/Events.module.scss';

const events = () => {
  return (
    <Layout
      content="This is the events page for where we will have stalls throughout the year."
      title="Where we'll be!"
    >
      <div className={styles.events}>
        <div className="container">
          <HeadingTitle>
            Leopardi will be at the following events in{' '}
            {new Date().getFullYear()}
          </HeadingTitle>
          <div className={styles.events__content}>
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
            <p>
              <span>22nd - 24th June:</span> The Lincolnshire Show. The Mews
              Eighth Avenue. Lincolnshire Showground. LN2 2NA
            </p>
            <p>
              <span>5th October:</span> Friends of Essex Churches Trust Gift
              Fair, Hylands House,Hylands Park, Chelmsford. CM2 8WQ
            </p>
            <p>
              <span>16th - 19th Nov.</span> Ely Cathedral Christmas Fair, Ely,
              CB7 4DL (TBC)
            </p>
            <p>
              <span>25th - 27th Nov.</span> Presents Galore Christmas Charity
              Fair, Rowley Mile, Newmarket, CB8 0TF
            </p>
            <p>
              <span>24th - 27th Nov.</span> The Burghley Christmas Fair,
              Burghley House, Stamford, Lincolnshire.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default events;
