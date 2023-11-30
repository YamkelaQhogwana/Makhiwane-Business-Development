import React, { useState } from 'react'
import MobileMenu from './Mobile-Menu'
import { NavLink, useNavigate } from 'react-router-dom';
import Socials from '../Socials-Bar/Socials';
import MenuMobile from './Menu';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
   <header>
    <section className="logo-and-icon">
        <img src="./img/makhiwane-logo.png" alt="Makhiwane Business Development Logo" style={{height : "30px"}} />
        <h1>Makhiwane</h1>
    </section>

    <section className="navigation" >
        <ul aria-label='makhiwane desktop navigation'>
            <li>
                <a href="" onClick={()=>navigate("./")}>HOME</a>
            </li>
            <li>
                <a onClick={()=>navigate("./services")}>SERVICES</a>
            </li>
            <li>
                <Link to="/#contact-us">CONTACT</Link>
            </li>
            <li>
               <Link to="/#about-us">ABOUT US</Link>
            </li>
        </ul>
    </section>
      
      <Socials></Socials>

   {windowWidth <= 800 && <MenuMobile></MenuMobile>}

   </header>
  )
}

export default Header
