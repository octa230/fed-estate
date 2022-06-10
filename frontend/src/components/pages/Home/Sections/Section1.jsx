import React from 'react';
import Navbar from '../../../navbar/Navbar';
import styles from './Section1.module.scss';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import building1 from '../../../../assests/building1.jpg'

const Section1 = () => {

  const [price, setPrice] = useState("<100k");
  const [location, setLocation] = useState('');
  return (
    <section className={styles.section_1}>
        {/**NAVBAR */}
       <div className={styles.Navbar}>
       <Navbar BurgerColor={'whitesmoke'}/>
       </div>

       {/**BACKGROUND IMAGES */}
      
      <div className={styles.img}></div>

       {/**CONTENT SECTION*/}
      
       <div className={styles.section_1_content}>
           {/**BRAND TAGLINE */}

           <div className={styles.slogan}>
                <h1>Your dreams under one roof</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Vitae consequuntur, quaerat perferendis blanditiis dolor sequi. 
                    Sequi ut iusto nihil hic. Voluptatibus harum obcaecati, 
                    tempora enim eius eligendi unde suscipit architecto.
                </p>

                {/**searchbox */}

                <div className={styles.search_container}>
                  {/**Location */}

                  <div className={styles.location_container}>
                    <span>Location</span>
                    <input type='text' placeholder='Enter Location' onChange={(e) =>setLocation(e.target.value)}/>
                  </div>

                  {/**PRICE RANGE */}

                  <div className={styles.price_container}>
                    <span>Price Range</span>
                    <select name='Price' id='price' onChange={(e) => setPrice(e.target.value)}>
                      <option value='<100k'>{`<100k`}</option>
                      <option value="100k-200k">100k-200k</option>
                      <option value="100k-500k">100k-500k</option>
                      <option value='>500k'>{`>500k`}</option>
                    </select>
                  </div>

                  {/**Search button */}

                  <button className={styles.btn_search}>
                    <Link to='search'>Search</Link>
                  </button>
                </div>
           </div>

           {/**Building Image */}

           <div className={styles.slogan_Image}>
              <img src={building1} alt='building' />
           </div>
       </div>
    </section>
  )
}

export default Section1
