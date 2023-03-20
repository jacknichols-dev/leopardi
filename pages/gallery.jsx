import HeadingTitle from '@/components/headingTitle/HeadingTitle';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Image from 'next/legacy/image';
import React from 'react';
import styles from '../styles/Gallery.module.scss';
import { GALLERY } from '../data/galleryData';

const gallery = () => {
  return (
    <Layout
      content="This is the scaffolding page for Riverport Scaffolding website"
      title="Gallery Page"
    >
      <div className="container">
        <div className={styles.gallery}>
          <HeadingTitle>Gallery Showcasing Our Unique Collections</HeadingTitle>
          <p>
            All the fabrics used for our coats and jackets are made in cashmere,
            merino wool, silk or block printed cotton. In addition to these, we
            have introduced a range of colourful and easy to wear Italian
            knitwear.
          </p>
          <br />
          <p>
            We have been a member of the Charity Fair Association since 1998 and
            have had stalls at many charity fairs, shows and luncheons around
            the country. Through these fairs we have donated ten per cent of our
            turnover to many charities.
          </p>

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
                  alt="gallery pic"
                  blurDataURL={itm.img}
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                  className={styles[itm.class]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default gallery;
