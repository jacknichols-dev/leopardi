import React from 'react';
import styles from '../../styles/HeadingTitle.module.scss';

const HeadingTitle = (props) => {
  return (
    <h1 className={styles.title} style={{ color: props.color }}>
      {props.children}
    </h1>
  );
};

export default HeadingTitle;
