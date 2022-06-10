import React from 'react'
import styles from './Section5.module.scss';
import building4 from '../../../../assests/building4.webp';
import building5 from '../../../../assests/building5.webp'
import {ArrowButton} from '../../../buttons/Buttons';
const Section5 = () => {
  return (
    <section className={styles.section_5}>
      <div className={styles.action}>
          <h1>Your Best Partner to find New Homes</h1>

          <ArrowButton text='Get Started' path = "search" />
      </div>
      <div className={styles.image_container_1}>
        <img src={building4} alt='building4' />
      </div>
      <div className={styles.image_container_2}>
        <img src={building5} alt='building5' />
      </div>
    </section>
  )
}

export default Section5
