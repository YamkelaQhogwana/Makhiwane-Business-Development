import React from 'react'
import "./Footer.css"
import Socials from '../Socials-Bar/Socials'
const Footer = () => {
  return (
    <section id="footer">
        <div className="footer-content-container">
      <article className="sitemap">
        <h3>SITEMAP</h3>
        <ul className="sitemap-links">
            <ul><li><a href="">SERVICES</a></li></ul>
            <ul><li><a href="GALLERY">GALLERY</a></li></ul>
            <ul><li><a href="">ABOUT US</a></li></ul>
            <ul><li><a href="">VISION AND MISSION</a></li></ul>
            <ul><li><a href="">CONTACT US</a></li></ul>
        </ul>
      </article>

      <article className="footer-services">
        <h3>SERVICES</h3>
        <ul className="footer-services-links">
            <ul><li><a href="">HR TRAINING</a></li></ul>
            <ul><li><a href="GALLERY">BUSINESS SEMINARS</a></li></ul>
            <ul><li><a href="">FINANCIAL PLANNING</a></li></ul>
            <ul><li><a href="">MARKETING STRATEGY</a></li></ul>
            <ul><li><a href="">ONLINE PRESENCE</a></li></ul>
        </ul>
      </article>  

      <article className="footer-faqs">
        <h3>FAQS</h3>
        <ul className="footer-services-links">
            <ul><li><a href="">MARKETING IMPORTANCE</a></li></ul>
            <ul><li><a href="GALLERY">BUSINESS STRATEGY</a></li></ul>
            <ul><li><a href="">BUSINESS CHALLENGES</a></li></ul>
            <ul><li><a href="">HR CHALLENGES</a></li></ul>
            <ul><li><a href="">BUSINESS DEVELOPMENT</a></li></ul>
        </ul>
      </article>  

      <article className="get-started-and-socials">
        <section className="name-and-slogan">
        <h3>MAKHIWANE</h3>
        <p>Diversity leads to innovation culture</p>
        </section>
        <button>GET STARTED</button>
        <Socials></Socials>
      </article>
      </div>
      <p>©MAKHIWANE BUSINESS DEVELOPMENT 2023</p>
    </section>
  )
}

export default Footer
