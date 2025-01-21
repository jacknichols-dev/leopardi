import HeadingTitle from '@/components/headingTitle/HeadingTitle';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Image from 'next/legacy/image';
import React from 'react';
import styles from '../styles/Gallery.module.scss';
import { GALLERY } from '../data/galleryData';
import OurCustomers from '../components/ourCustomers/OurCustomers';
import EtsyCta from '../components/welcome/EtsyCta';

const gallery = () => {
  return (
    <Layout
      content="Looking For Beautiful Occasional Wear Made From The Finest Materials? Browse through our image gallery for our latest clothing collections."
      title="Luxurious Women's Occasional Wear Clothing | Showcasing Our Items"
    >
      <div className="container">
        <div className={styles.gallery}>
          <div className={styles.gallery__title}>
            <HeadingTitle>
              Gallery Showcasing Our Unique Collections
            </HeadingTitle>
          </div>
          <div className={styles.gallery__header}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ paddingBottom: '3rem' }}>
                Occasional wear clothing for women of exceptional quality and
                elegance.
              </h1>
              <p style={{ paddingBottom: '3rem' }}>
                Our coats and jackets are made from luxurious fabrics like
                cashmere, merino wool, silk, and block-printed cotton. We’ve
                also added a fun and easy-to-wear collection of colorful Italian
                knitwear.
                <br></br>
                <br></br> Since 1998, we have been a member of the Charity Fair
                Association, participating in numerous charity fairs, shows, and
                luncheons across the nation. Through these events, we have
                generously donated ten percent of our turnover to various
                charitable causes.
              </p>
              <div style={{ flex: '1', width: '100%' }}>
                <EtsyCta
                  pic="/assets/jackets.jpg"
                  text1="Explore Our Product Range"
                  text2="On Our Etsy Store."
                  alt="Merino wool red jacket with floral detailing"
                />
              </div>
            </div>
          </div>

          <div className={styles.gallery__container}>
            {GALLERY.map((itm) => (
              <div
                key={itm.id}
                className={`${styles['gallery__imgContainer']} ${
                  styles[itm.class]
                }`}
              >
                <Image
                  src={itm.img}
                  alt={itm.alt}
                  blurDataURL={itm.img}
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                  className={styles[itm.class]}
                />
              </div>
            ))}
          </div>
          {/* <HeadingTitle>Our Customers Dressed in Leopardi</HeadingTitle> */}
          <OurCustomers />
        </div>
      </div>
    </Layout>
  );
};

export default gallery;
