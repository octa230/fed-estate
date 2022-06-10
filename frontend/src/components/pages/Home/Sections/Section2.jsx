import React from 'react';
import {ArrowButton} from '../../../buttons/Buttons';
import styles from "./Section2.module.scss";
import building2 from '../../../../assests/building2.jpeg'

const Section2 = () => {
  return (
    <section className={styles.section_2}>
      <div className={styles.section_2_image_container}>
          <img src={building2} alt="building2" />
      </div>

      {/**SLOGAN */}

      <div className={styles.section_2_slogan}>
        <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quas porro quod ipsam architecto eaque, molestias, 
        </h1>
      </div>

      {/**SELECTION */}

      <div className={styles.selection}>
        <div className={styles.buy}>
            <h3>Purchase a Home</h3>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Harum facilis maiores ad maxime nostrum laborum culpa quo. 
            </p>
            <ArrowButton text={'Search Houses'} path="buy"/>
        </div>

          {/**RENT */}
      
     
          <div className={styles.rent}>
            <h3>Rent a Home</h3>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Harum facilis maiores ad maxime nostrum laborum culpa quo. 
            </p>
            <ArrowButton text={'See Listings'} path="rent"/>
        </div>

           {/**SELl */}
      
           <div className={styles.sell}>
            <h3>Sell a property</h3>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Harum facilis maiores ad maxime nostrum laborum culpa quo. 
            </p>
            <ArrowButton text={'Use Filters'} path="search"/>
        </div>
      </div>

     

    
    </section>
  )
}

export default Section2
