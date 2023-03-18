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
        <HeadingTitle color="#14583f">Our Categories</HeadingTitle>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {CATEGORIES.map((item, index) => (
            <div key={index} className={styles.categories__card}>
              <Image
                src={item.img}
                alt="category"
                layout="fill"
                objectFit="contain"
              />
              <h2>{item.title}</h2>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
