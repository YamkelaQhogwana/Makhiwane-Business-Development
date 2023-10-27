import React from 'react'
import "./Footer.css"
import Socials from '../Socials-Bar/Socials'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <section id="footer">
        <div className="footer-content-container">
      <article className="sitemap">
        <h3>SITEMAP</h3>
        <ul className="sitemap-links">
            <li><Link to="/services#services-hr">SERVICES</Link></li>
            <li><Link to="/#gallery">GALLERY</Link></li>
            <li><Link to="/#about-us">ABOUT US</Link></li>
            <li><Link to="/#vision-mission">VISION AND MISSION</Link></li>
            <li><Link to="/#contact-us">CONTACT US</Link></li>
        </ul>
      </article>

      <article className="footer-services">
        <h3>SERVICES</h3>
        <ul className="footer-services-links">
           <li><Link to="/services#services-hr">HUMAN RESOURCES</Link></li>
           <li><Link to="/services#services-marketing">MARKETING</Link></li>
           <li><Link to="/services#services-analytics">ANALYTICS</Link></li>
           <li><Link to="/services#services-logistics">LOGISTICS</Link></li>
           <li><Link to="/services#services-packages">PACKAGES</Link></li>
        </ul>
      </article>  

      <article className="footer-faqs">
        <h3>FAQS</h3>
        <ul className="footer-services-links">
           <li><a href="#faqs">MARKETING IMPORTANCE</a></li>
           <li><a href="#faqs">BUSINESS STRATEGY</a></li>
           <li><a href="#faqs">BUSINESS CHALLENGES</a></li>
           <li><a href="#faqs">HR CHALLENGES</a></li>
           <li><a href="#faqs">BUSINESS DEVELOPMENT</a></li>
        </ul>
      </article>  

      <article className="get-started-and-socials">
        <section className="name-and-slogan">
        <h3>MAKHIWANE</h3>
        <p>Diversity leads to innovation culture</p>
        </section>
        <Link  to= "/services#services-hr"><button style={{width : "100%"}}>GET STARTED</button></Link>
        <Socials></Socials>
      </article>
      </div>
      <p>©MAKHIWANE BUSINESS DEVELOPMENT 2023</p>
    </section>
  )
}

export default Footer
