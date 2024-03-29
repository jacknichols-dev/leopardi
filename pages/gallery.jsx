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
          <div style={{ margin: '6rem 0' }}>
            <HeadingTitle>
              Gallery Showcasing Our Unique Collections
            </HeadingTitle>
          </div>
          <div className={styles.gallery__header}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ paddingBottom: '3rem' }}>
                Luxurious Women&apos;s Occasional Wear Clothing
              </h1>
              <p style={{ paddingBottom: '3rem' }}>
                All the fabrics used for our coats and jackets are made in
                cashmere, merino wool, silk or block printed cotton. In addition
                to these, we have introduced a range of colourful and easy to
                wear Italian knitwear.<br></br>
                <br></br> We have been a member of the Charity Fair Association
                since 1998 and have had stalls at many charity fairs, shows and
                luncheons around the country. Through these fairs we have
                donated ten per cent of our turnover to many charities.
              </p>
              <div style={{ flex: '1', width: '100%' }}>
                <EtsyCta
                  pic="/assets/jackets.jpg"
                  text1="Interested In Our Ranges?"
                  text2="See Our Products"
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
          <HeadingTitle>Our Customers</HeadingTitle>
          <OurCustomers />
        </div>
      </div>
    </Layout>
  );
};

export default gallery;
