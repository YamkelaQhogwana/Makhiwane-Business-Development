import React from 'react'
import "./Portfolio.css"
import { useNavigate } from 'react-router-dom'
const Portfolio = () => {
    const navigate = useNavigate();
  return (
    <section id="portfolio">
        <p>GALLERY</p>
        <h3>Our work in action</h3>

        <section className="gallery">
            <section className="video-container">
                <video src="./img/gallery-1.mp4" loop  controls  poster='./img/analytics-2.jpg' ></video>
            </section>
            <article className="marketing">
                <h3>MARKETING SEMINAR</h3>
                <p>Marketing Seminars assist your organization as a whole gain an intricate understanding of the importance of an excellent public image</p>
                <a href="#" onClick={()=>navigate("/services#services-hr")}>GET STARTED</a>
            </article>
            <section className="image-container">
                <img src="./img/gallery-2.jpg" alt="" />
            </section>
            <section className="image-container">
                <img src="./img/gallery-3.jpg" alt="" />
            </section>
            <section className="video-container">
                <video src="./img/gallery-4.mp4"  poster='./img/analytics-1.jpg'  loop controls></video>
            </section>
            <article className="marketing">
                <h3>HUMAN CAPITAL TRAINING</h3>
                <p>Our consultants train your staff across departments in order to assist improve organizational culture</p>
                <a href="#" style={{backgroundColor : "lightseagreen"}} onClick={()=>navigate("/services#services-hr")}>GET STARTED</a>
            </article>
             
        </section>
    </section>
  )
}

export default Portfolio


