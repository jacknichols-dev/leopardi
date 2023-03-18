import Image from 'next/legacy/image';
import React from 'react';
import styles from '../../styles/Footer.module.scss';
// import Image from 'next/image';

// import logo from '../../public/assets/icons/riverport-logo.svg';
// import Map from '../map/Map';
// import Btn from '../btn/Btn';
// import Link from 'next/link';
// import ContactInfo from '../contactInfo/ContactInfo';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__top}>
          <span className={styles['footer__top--left']}></span>
          <Image
            src="/assets/leopardi-icon.png"
            width="120%"
            height="70%"
            alt="icon"
          ></Image>
          <span className={styles['footer__top--right']}></span>
        </div>
        <div className={`${styles.footer__content} ${'container'}`}>
          <div className={styles.footer__left}></div>
        </div>

        <div className={styles.footer__right}></div>
      </footer>
      <div className={styles.footer__bottom}>
        <div className={`${styles['footer__bottom--content']} ${'container'}`}>
          <div className={styles['footer__bottom--left']}>
            <p>
              <strong>© Leopardi 2023. All rights reserved.</strong>{' '}
              {/* |
              <small style={{ color: '#f0b020' }}>
                {' '}
                Created by Cambs Digital
              </small> */}
            </p>
          </div>
          <div className={styles['footer__bottom--right']}>
            <ul>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
