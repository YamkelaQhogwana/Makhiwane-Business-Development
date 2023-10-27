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
        <div className="icon" onClick={()=>navigate("./")}></div>
        <p>makhiwane.</p>
    </section>

    <section className="navigation">
        <ul>
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

   {/*  <section className="mobile-menu" onClick={()=>{
        setMobileOpen(true)
    }}>
        <div></div>
        <div></div>
        <div></div>
    </section> */}

   
   {windowWidth <= 800 && <MenuMobile></MenuMobile>}

   </header>
  )
}

export default Header
