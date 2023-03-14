import React from 'react';
import styles from '@/styles/Home.module.scss';
import Image from 'next/legacy/image';

const WelcomeSection = () => {
  return (
    <div className="container">
      <div className={styles.welcome}>
        <div className={styles.welcome__left}>
          <h1>Welcome to Leopardi</h1>
          <h2>Bespoke Clothing Made For Any Occasion</h2>
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
        <div className={styles.welcome__right}>
          <Image
            src="/assets/welcome-img.png"
            alt="welcome"
            layout="fill"
            objectFit="cover"
          />
          <div
            className=""
            style={{
              background: 'black',
              opacity: '.5',
              height: '100%',
              width: '100%',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
