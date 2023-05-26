import React from 'react';
import styles from '@/styles/Home.module.scss';
import EtsyCta from './EtsyCta';

const WelcomeSection = () => {
  return (
    <div className="container">
      <div className={styles.welcome}>
        <div className={styles.welcome__left}>
          <h1>
            Welcome to Leopardi{' '}
            <span style={{ color: '#d3a166', fontSize: '2.5rem' }}>
              Clothing Made For Any Occasion
            </span>
          </h1>
          <p>
            All the fabrics used for our coats and jackets are made in cashmere,
            merino wool, silk or block printed cotton. In addition to these, we
            have introduced a range of colourful and easy to wear Italian
            knitwear. We have been a member of the Charity Fair Association
            since 1998 and have had stalls at many charity fairs, shows and
            luncheons around the country. Through these fairs we have donated
            ten per cent of our turnover to many charities.
          </p>
          <br></br>
          <p>
            We are a fantastic choice for occasion-wear with bespoke hand picked
            collections of silk jackets, coats, dresses, kimonos and silk
            dressing gowns
          </p>
        </div>

        <EtsyCta />
      </div>
    </div>
  );
};

export default WelcomeSection;
