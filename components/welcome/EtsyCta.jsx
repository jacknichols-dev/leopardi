import React from 'react';
import Image from 'next/legacy/image';
import Button from '../button/Button';
import styles from '@/styles/Home.module.scss';

const EtsyCta = () => {
  return (
    <div className={styles.welcome__right}>
      <>
        <Image
          src="/assets/gallery-img-5.png"
          alt="welcome"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles['welcome__right--text']}>
          <h1>
            View Our Range On <br></br>
            <span style={{ color: 'orange' }}>Etsy.</span>
          </h1>
          <a
            href="https://www.etsy.com/uk/shop/LeopardiUK"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline', position: 'relative' }}
          >
            <Button>Shop Now</Button>
          </a>
        </div>

        <div
          className=""
          style={{
            background: 'black',
            opacity: '.5',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </>
    </div>
  );
};

export default EtsyCta;
