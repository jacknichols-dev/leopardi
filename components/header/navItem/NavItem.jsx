import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Header.module.scss';

const NavItem = ({ href, name, active }) => {
  return (
    <Link
      href={href}
      className={`${styles['header__nav--link']} ${
        active ? `${styles['header__nav--link-active']}` : ''
      }`}
    >
      <p>{name}</p>
    </Link>
  );
};

export default NavItem;
