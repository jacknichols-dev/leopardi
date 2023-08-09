import React from 'react';
import Image from 'next/legacy/image';
import Button from '../button/Button';
import styles from '@/styles/Home.module.scss';

const EtsyCta = ({ pic, text1, text2 }) => {
  return (
    <div className={styles.welcome__right}>
      <>
        <Image src={pic} alt="welcome" layout="fill" objectFit="cover" />
        <div className={styles['welcome__right--text']}>
          <h2>
            {text1} <br></br>
            <span style={{ color: 'orange' }}>{text2}</span>
          </h2>
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
