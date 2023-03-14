import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Header.module.scss';

const NavItem = ({ href, name, active }) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`${styles['header__nav--link']} ${
          active ? `${styles['header__nav--link-active']}` : ''
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default NavItem;
