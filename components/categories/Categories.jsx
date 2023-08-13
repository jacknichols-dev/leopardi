import React from 'react';
import styles from '@/styles/Categories.module.scss';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CATEGORIES } from '../../data/categoriesData';
import Image from 'next/legacy/image';
import HeadingTitle from '../headingTitle/HeadingTitle';

const Categories = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 850 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1050, min: 600 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.categories}>
      <div className="container">
        <HeadingTitle>Our Categories</HeadingTitle>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {CATEGORIES.map((item, index) => (
            <div key={index} className={styles.categories__card}>
              <a
                href="https://www.etsy.com/uk/shop/LeopardiUK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  layout="fill"
                  objectFit="contain"
                  blurDataURL={item.img}
                  placeholder="blur"
                />
                <h2>{item.title}</h2>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
