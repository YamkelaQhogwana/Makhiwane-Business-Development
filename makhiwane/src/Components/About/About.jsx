import React from 'react'
import "./About.css"
const About = () => {
  return (
    <section id="about">
        <article className="who-we-are">
          <div className="orange-bar"></div>
          <p>WHO WE ARE</p>  
          </article>

          <section className="about-us-main">
            <section className="founders-image">
              <img src="./img/founder.jpg" alt="" />  
            </section>
            <article className="about-us-article">
                <h3>FOUNDERS STORY</h3>
                <p>Xola Qhogwana, the visionary entrepreneur behind Makhiwane Business Development, is currently on a dedicated academic journey, pursuing a Ph.D. in Business Administration at the University of South Africa (UNISA). His passion for business innovation and entrepreneurship is underpinned by a solid foundation in engineering, with Xola initially earning a National Diploma in Mechanical Engineering from the prestigious Durban University of Technology (DUT). He holds a Master's in Business Leadership and Management, and, having earned two certificates in Operations and Business Management from DUT, he brings a wealth of knowledge and expertise to the business landscape. With over 15 years of invaluable experience in pivotal roles within various international corporations, Xola has honed his acumen for business strategy and development. However, his true calling lies in his unwavering commitment to empowering and uplifting small businesses, equipping them with the tools and knowledge needed to thrive from the ground up. Makhiwane Business Development embodies his dedication to fostering growth and success within the entrepreneurial landscape. </p>
            </article>
          </section>  
    </section>
  )
}

export default About
