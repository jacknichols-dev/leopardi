import React from 'react';
import { CARDS } from '../../data/cardsData';

import styles from '../../styles/Featured.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/legacy/image';
import Button from '../button/Button';
import HeadingTitle from '../headingTitle/HeadingTitle';

const FeaturedProducts = () => {
  return (
    <div className="container">
      <div className={styles.featured}>
        <HeadingTitle>Our Featured Products</HeadingTitle>

        <div className={styles.featured__cards}>
          {CARDS.map((card) => (
            <div key={card.id} className={styles.featured__card}>
              <div className={styles['featured__card--img-container']}>
                <div className={styles['featured__card--img']}>
                  <Image
                    src={card.img}
                    alt="product"
                    layout="fill"
                    objectFit="cover"
                    blurDataURL={card.img}
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className={styles['featured__card--footer']}>
                <h2>{card.title}</h2>
                <div className={styles['featured__card--footer-link']}>
                  <p>Click to view on Etsy</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            margin: '5rem auto',
            textAlign: 'center',
            width: '80%',
          }}
        >
          We have a look for any occasion, from those special occasions to
          uplifting your look on the high street. Each piece has been
          meticulously hand picked from the fabric to the pattern as well as the
          fit measured for all sizes, making sure each look is unique to you.
          All our collections can be bought through our Etsy store. Just click
          the button below to view our offerings.
        </p>
        <div className="" style={{ textAlign: 'center' }}>
          <Button>Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
