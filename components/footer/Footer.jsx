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
        {/* <div className={`${styles.footer__content} ${'container'}`}>
          <div className={styles.footer__left}>
            <ContactInfo textColor="white" />
            <div className={styles['footer__left--item']}>
              <h2 style={{ color: '#f0b020' }}>Business Hours</h2>
              <p>Mon - Sat</p>
              <p>8am - 6pm</p>
            </div>
            <div className={styles['footer__left--item']}>
              <h2 style={{ color: '#f0b020' }}>Sitemap</h2>
              <ul>
                <Link href={'/scaffolding'} legacyBehavior>
                  <li>Our Services</li>
                </Link>
                <Link href={'/gallery'} legacyBehavior>
                  <li>Gallery</li>
                </Link>
                <Link href={'/contact'} legacyBehavior>
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className={styles.footer__right}>
            <div className={styles['footer__right--map']}>
              <Map />
            </div>
            <p>
              We pride ourselves on offering a hassle free & affordable service
              where customers needs always take priority as do excellent,
              quality workmanship.
            </p>
            <Link href={'/contact'}>
              <Btn color="white" bg="#438bbf" margin="0" href="/contact">
                Get a quote
              </Btn>
            </Link>
          </div>
        </div> */}
      </footer>
      <div className={styles.footer__bottom}>
        <div className={`${styles['footer__bottom--content']} ${'container'}`}>
          <div className={styles['footer__bottom--left']}>
            <p>
              <strong>
                Copyright <small>©</small> 2023 Leopardi Clothing
              </strong>{' '}
              {/* |
              <small style={{ color: '#f0b020' }}>
                {' '}
                Created by Cambs Digital
              </small> */}
            </p>
          </div>
          <div className={styles['footer__bottom--right']}>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
