import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Header.module.scss';
import logo from '../../../public/assets/leopardi-logo.svg';
import mail from '../../../public/assets/email_outline.svg';
import NavItem from '../navItem/NavItem';
import Image from 'next/image';
// import { AiFillPhone, AiOutlineCloseCircle } from 'react-icons/ai';
// import Btn from '../../btn/Btn';

const MENU_LIST = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Gallery',
    href: '/gallery',
  },
  {
    name: 'Events',
    href: '/events',
  },
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
];

const Navbar = ({ scrollActive }) => {
  useEffect;
  const [navActive, setNavActive] = useState(false);
  const [activeInx, setActiveInx] = useState(0);

  return (
    <>
      <nav className={styles.header__nav}>
        <Link legacyBehavior href={'/'} passHref>
          <a onClick={() => setActiveInx(0)} style={{ flex: '1' }}>
            <Image
              src={logo}
              className={
                scrollActive
                  ? `${styles['header__nav--logo-scrolled']} ${styles['header__nav--logo']}`
                  : `${styles['header__nav--logo']}`
              }
              // layout="fill"
              width="auto"
              height="auto"
              alt="Leopardi logo"
            />
          </a>
        </Link>
        <div className={styles['header__nav--toggle']}>
          <div
            onClick={() => {
              setNavActive(!navActive);
            }}
            className={styles['header__nav--bars']}
            style={{ display: navActive ? 'none' : 'flex' }}
          >
            <span
              className={`${styles['header__nav--bar']} ${styles['bar1']}`}
            ></span>
            <span
              className={`${styles['header__nav--bar']} ${styles['bar2']}`}
            ></span>
            <span
              className={`${styles['header__nav--bar']} ${styles['bar3']}`}
            ></span>
          </div>

          {/* <AiOutlineCloseCircle
            size="5rem"
            style={{
              display: navActive ? 'flex' : 'none',
              zIndex: '999999',
              cursor: 'pointer',
            }}
            onClick={() => {
              setNavActive(!navActive);
            }}
          /> */}
        </div>

        <div
          className={`${styles['header__nav--menu']} ${
            navActive ? `${styles['header__nav--active']}` : ''
          }`}
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              // style={{ zIndex: '99999' }}
              onClick={() => {
                setActiveInx(idx);
                setNavActive(false);
              }}
              className={styles['header__nav--menu-list']}
              key={idx}
            >
              <NavItem active={activeInx === idx} {...menu} />
            </div>
          ))}
        </div>
        <div className={styles['header__nav--email']}>
          <Image
            src={mail}
            // layout="fill"
            width="auto"
            height="auto"
            alt="mail icon"
          />
          <h3>leopardi@sky.com</h3>
        </div>
      </nav>
      <div
        onClick={() => {
          setNavActive(!navActive);
        }}
        style={{ display: navActive ? 'block' : 'none' }}
        className="backdrop"
      ></div>
    </>
  );
};

export default Navbar;
