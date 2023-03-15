import React from 'react';
import styles from '@/styles/Categories.module.scss';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CATEGORIES } from '../../data/categoriesData';
import Link from 'next/link';
import Image from 'next/legacy/image';
import Button from '../button/Button';
import HeadingTitle from '../headingTitle/HeadingTitle';

const Categories = () => {
  //   SwiperCore.use([Navigation, Pagination, Autoplay]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
