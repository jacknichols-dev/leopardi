import Image from 'next/legacy/image';
import React from 'react';
import styles from '../../styles/HeadingTitle.module.scss';

import { icon } from '../../public/assets/leopardi-icon.png';

const HeadingTitle = (props) => {
  return (
    <h2 className={styles.title} style={{ color: props.color }}>
      {props.children}
    </h2>
  );
};

export default HeadingTitle;
