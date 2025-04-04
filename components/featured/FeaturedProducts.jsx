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
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <div className={styles['featured__card--img-container']}>
                  <div className={styles['featured__card--img']}>
                    <Image
                      src={card.img}
                      alt={card.alt}
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
              </a>
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
          We find styles for any occasion, from special events to elevating your
          high street look. Each piece is meticulously handpicked from fabric to
          pattern, with a unique fit for all sizes. Shop our collections at our
          Etsy store. Click below to view our offerings.
        </p>
        <div className="" style={{ textAlign: 'center' }}>
          <a
            href="https://www.etsy.com/uk/shop/LeopardiUK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Shop Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
