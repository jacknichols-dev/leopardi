/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Header.module.scss';
import Navbar from './navbar/Navbar';

const header = ({ active }) => {
  const [scrolled, setScrolled] = useState(false);

  const navScrollHandler = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navScrollHandler);
  }, []);

  return (
    <>
      <div className={styles['header-container']}>
        <div className={styles.topmenu}>
          <a
            href="https://www.etsy.com/uk/shop/LeopardiUK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Free UK Delivery{' '}
              <span className={styles.topmenu__hidden}>
                From Our Etsy Store.
              </span>{' '}
              <span className={styles.topmenu__link}>Shop Here</span>
            </p>
          </a>
        </div>
        <header
          className={
            scrolled
              ? `${styles['header__scrolled']} ${styles['header']}`
              : `${styles['header']}`
          }
        >
          <div className={styles.header__content}>
            <Navbar scrollActive={scrolled} navActive={active} />
          </div>
        </header>
      </div>
    </>
  );
};

export default header;
