import React from 'react';
import styles from './Card.module.scss';

//icons

import { BsFillDoorOpenFill } from 'react-icons/bs'
import {IoIosBed} from 'react-icons/io';
import {IoLocationSharp} from 'react-icons/io5';
import {FaBath} from 'react-icons/fa';

import building3 from '../../assests/building3.jpg';
import { Link } from 'react-router-dom';

const Card = ({info, showInfo, secondClass}) => {

  //CONVERT PRICE FUNC

  const convertPrice = (price) =>{
    if (price >= 1000 && price <999999) return `${price/1000}k`;
    if (price >= 1000000) return `${price/1000000}m`;
    return price;
  };

  //CONVERT RENT FUNC

  const convertRent = (rent)=>{
    if (rent>=1000) return `${rent/1000}k`;
    return rent;
  }

  return (
    <div className={`${styles.card_container} ${secondClass}`}>
      
      {/**IMAGE */}
      <div className={styles.image_container}>
        <div className={styles.image_buy_btn}>
          <Link to="/">{info.category}</Link>
        </div>
      <img src={info.imageSource} alt='building' />
      {/**CITY */}

      <h3>{info.city}</h3>
      <h4>
        <p className={styles.neighbourhood}>{info.neighourhood}</p>
        <p className={styles.street}>{info.street}</p>
      </h4>

      {/**ROOMS ETC */}

      <div className={styles.info}>
        {/**ROW -1 */}
        <div className={styles.row1}>

          {/**ROOMS */}
          <div className={styles.rooms}>
            <BsFillDoorOpenFill />
            <span>{`${info.rooms} Rooms`}</span>
          </div>
          {/**BEDROOMS */}
          <div className={styles.bedrooms}>
            <IoIosBed />
            <span>{`${info.bedrooms}`}</span>
          </div>
        </div>
        {/**ROW2 */}
        <div className={styles.row2}>{/**bathrooms */}
          <div className={styles.bathrooms}>
            <FaBath />
            <span>{`${info.bathrooms} Bathrooms`}</span>
          </div>
          {/**short Address (Airport Code) */}
          <div className={styles.shortAddress}>
            <IoLocationSharp />
            <span>{`${info.shortAddress}`}</span>
          </div>
        </div>
      </div>

      <div className={styles.card_buy}>
        {/**PRICES */}

        <div className={styles.prices}>
          <h2 style={showInfo.price ? {} : {display:'none'}}>
            {`${convertPrice(info.price)}$`}
          </h2>

          <h2 style={showInfo.rent ? {} : {display: "none"}}>
            {`${convertRent(info.rent)}`}
            </h2>

          {/**SEE MORE BUTTON */}

          <div className={styles.card_btn}>
            <Link to={`/property/${info.id}`}>See More</Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
};

//default props

Card.defaultProps = {
  info: {
    id: undefined,
    imageSource: building3,
    category: "Buy",
    city: "City",
    neighourhood: "Neighbourhood",
    street: "Street",
    rooms: 9,
    bathrooms: 7,
    bedrooms: 2,
    shortAddress: 'DA',
    price: 80000,
    rent: 0,
  },
  showInfo: {
    price: true,
    rent: false,
  }, 
  secondClass: "undefined",
};

export default Card
