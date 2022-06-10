import React from 'react'
import styles from './Section4.module.scss';
import building3 from '../../../../assests/building3.jpg'

const Section4 = () => {
  return (
    <section className={styles.section_4}>
        {/**SECTION TITLE */}
      <div className={styles.section_4_title}>
            <h1>Get a home for the best prices across the Region</h1>
      </div>

      {/**CONTENT */}

      <div className={styles.section_4_content}>
        {/**IMAGE CONTAINER */}

        <div className={styles.image_container}>
            <img src={building3} alt="building" />
        </div>

        {/**INFO */}
        <div className={styles.info}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eaque amet rem fuga corrupti voluptate explicabo quasi.
            </p>
            <div className={styles.rows}>
            {/**ROW1 */}
            <div className={styles.row_1}>
                {/**FACT1 */}
                <div className={styles.fact}>
                    <h2> 10.234</h2>
                    <h3>Completed Homes</h3>
                </div>

                {/**Fact2 */}
                <div className={styles.fact}>
                    <h2> 11.234</h2>
                    <h3>Rented Houses</h3>
                </div>
            </div>

             {/**ROW2 */}
             <div className={styles.row_2}>
                {/**FACT1 */}
                <div className={styles.fact}>
                    <h2> 10.234</h2>
                    <h3>Sold Properties</h3>
                </div>

                {/**Fact2 */}
                <div className={styles.fact}>
                    <h2> 11.234</h2>
                    <h3>Happy Families</h3>
                </div>
            </div>
        </div>
        </div>

     
      </div>
    </section>
  )
}

export default Section4
