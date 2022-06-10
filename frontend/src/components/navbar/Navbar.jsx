import React from 'react'
import styles from './Navbar.module.scss';
import {NavLink, Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa'
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';
import logo from '../../assests/logo.png'

import useClickOutside from '../../CustomHooks/ClickOutside';

const Navbar = ({BurgerColor}) => {

const MenuLink = ({url, path})=>{
    return(<li className={styles.navlink}>
        <NavLink to={`${url}`}
        className={({isActive})=>(isActive ? styles.active : undefined)}>
            {`${path}`}
        </NavLink>
    </li>)
}

const [isNavOpen, setIsNavOpen] = useState(false);
let domNode = useClickOutside(() => {
    setIsNavOpen(false);
});

  return (
    <div className={styles.navbar_container}>
        <nav>
            {/**LOGO */}
            <div className={styles.brand_logo}>
                <Link to='/'><img src={logo} alt='fed_logo'/></Link>
            </div>

             {/**NAV-BURGER */}
             <div className={styles.mobile_menu} 
             style={{color:BurgerColor}}
             onClick = {() => setIsNavOpen(!isNavOpen)}
             >
                <FaBars />
            </div>

            {/**NAV */}

            <ul className={`${isNavOpen ? styles.ul_active : undefined} ${styles.navbar_ul}`} ref={domNode}>
                <div className={styles.mobile_close} onClick={() => setIsNavOpen(!isNavOpen)}>
                    <FaTimes />
                </div>

                {/**LI - MENULINK*/}

                <MenuLink url='' path='Home' />
                <MenuLink url='buy' path='Buy' />
                <MenuLink url='rent' path='Rent' />
                <MenuLink url='search' path='Search' />
                <MenuLink url='about' path='About' />
                <Link to='/auth' className={styles.login}>
                    <span>Login</span>
                </Link>
            
            </ul>

            {/**LOGIN */}
            <Link to='/auth' className={styles.login_container}>
                <span style={{color:BurgerColor}}>Login</span>
                <FaArrowRight style={{color:BurgerColor}}/>
            </Link>
        </nav>
      
    </div>
  );
}

Navbar.defaultProps = {
    BurgerColor:'rgb(26, 55, 58)'
}

export default Navbar
