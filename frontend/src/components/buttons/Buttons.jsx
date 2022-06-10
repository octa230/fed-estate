import{ Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import styles from './Buttons.module.scss'


import React from 'react'

const ArrowButton = ({text, path}) => {
  return (
    <div className={styles.btn}>
      <Link to={`${path}`}>{text}</Link>
      <BsArrowRight />
    </div>
  );
};

ArrowButton.defaultProps = {
  text: "Test btn",
  path: "/",
}

export {ArrowButton}
