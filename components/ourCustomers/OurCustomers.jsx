import React from 'react';
import styles from '../../styles/OurCustomers.module.scss';
import { CUSTOMERS } from '../../data/customersData';
import HeadingTitle from '../headingTitle/HeadingTitle';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/legacy/image';

const OurCustomers = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 850 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 600 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.customers}>
      <HeadingTitle>Our Customers Wearing Leopardi</HeadingTitle>
      <div className="container">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4500}
        >
          {CUSTOMERS.map((item, index) => (
            <div key={index} className={styles.customers__card}>
              <Image
                src={item.img}
                alt="silk jackets category "
                layout="fill"
                objectFit="contain"
                blurDataURL={item.img}
                placeholder="blur"
              />
              <h2>{item.title}</h2>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurCustomers;
