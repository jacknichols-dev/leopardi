import Image from 'next/legacy/image';
import React from 'react';
import styles from '../../styles/Footer.module.scss';
import Link from 'next/link';
import Button from '../button/Button';
// import Image from 'next/image';

// import logo from '../../public/assets/icons/riverport-logo.svg';
// import Map from '../map/Map';
// import Btn from '../btn/Btn';
// import Link from 'next/link';
// import ContactInfo from '../contactInfo/ContactInfo';

const Footer = () => {
  return (
    <>
      <div className={styles.footer__top}>
        <span className={styles['footer__top--left']}></span>
        <Image
          src="/assets/leopardi-icon.png"
          width="120%"
          height="65%"
          alt="icon"
        ></Image>
        <span className={styles['footer__top--right']}></span>
      </div>
      <footer className={styles.footer}>
        <div className={`${styles.footer__content} ${'container'}`}>
          <div className={styles.footer__left}>
            {/* <div className={styles['footer__left--item']}>
              <h2 style={{ color: '#f0b020' }}>Business Hours</h2>
              <p>Mon - Sat</p>
              <p>8am - 6pm</p>
            </div> */}
            <div className={styles['footer__left--item']}>
              <h2 style={{ color: '#f0b020' }}>Sitemap</h2>
              <ul>
                <Link href={'/gallery'} legacyBehavior>
                  <li>Gallery</li>
                </Link>
                <Link href={'/events'} legacyBehavior>
                  <li>Events</li>
                </Link>
                <Link href={'/contact'} legacyBehavior>
                  <li>Contact Us</li>
                </Link>
                <Link href={'/terms'} legacyBehavior>
                  <li>Terms & Conditions</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className={styles.footer__right}>
            <p>
              We pride ourselves on offering beautiful tailored clothing for all
              occasions at affordable prices. We take customers needs as a
              priority. Visit our Etsy store to view & purchase our offerings.
            </p>
            <Link href={'/contact'}>
              <Button href="/contact">Contact Us</Button>
            </Link>
          </div>
        </div>
      </footer>

      <div className={styles.footer__bottom}>
        <div className={`${styles['footer__bottom--content']} ${'container'}`}>
          <div className={styles['footer__bottom--left']}>
            <p>
              <strong>
                <small>©</small> Leopardi {new Date().getFullYear()} | All
                rights reserved | Registered in England & Wales
              </strong>
            </p>
          </div>
          <div className={styles['footer__bottom--right']}>
            <ul>
              <Link href={'/terms'}>
                <li>Terms & Conditions</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
