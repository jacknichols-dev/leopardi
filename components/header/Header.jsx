/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Header.module.scss';
import Navbar from './navbar/Navbar';

const header = ({ active }) => {
  const [scrolled, setScrolled] = useState(false);

  const navScrollHandler = () => {
    if (window.scrollY >= 280) {
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
          <p>Free UK Delivery From Our Etsy Store.</p>
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
        <div
          className={
            scrolled
              ? `${styles['submenu__scrolled']} ${styles['submenu']}`
              : `${styles['submenu']}`
          }
        >
          <div className="container">
            <p>
              You can purchase our products on our Etsy store -{' '}
              <span>Shop Here</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;