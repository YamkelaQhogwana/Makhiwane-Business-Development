import React, { useState } from 'react'
import MobileMenu from './Mobile-Menu'
import { NavLink, useNavigate } from 'react-router-dom';
import Socials from '../Socials-Bar/Socials';
const Header = () => {
    const [mobileOpen,setMobileOpen] = useState(false);
    const navigate = useNavigate()
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
                <a href='/#contact-us'>CONTACT</a>
            </li>
            <li>
                <NavLink to="/#about"><a href=''>ABOUT</a></NavLink>
            </li>
        </ul>
    </section>
      
      <Socials></Socials>

    <section className="mobile-menu" onClick={()=>{
        setMobileOpen(true)
    }}>
        <div></div>
        <div></div>
        <div></div>
    </section>

    {mobileOpen && <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}></MobileMenu>}
   </header>
  )
}

export default Header
