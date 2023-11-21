import React from 'react'
import "./Portfolio.css"
import { useNavigate } from 'react-router-dom'
const Portfolio = () => {
    const navigate = useNavigate();
  return (
    <section id="portfolio">
        <p>MAKHIWANE'S GALLERY</p>
        <h3>Our work in action</h3>

        <section className="gallery">
            <section className="video-container">
                <video src="./img/gallery-1.mp4" loop  controls  autoPlay  ></video>
            </section>
            <article className="marketing">
                <h3>MARKETING SEMINAR</h3>
                <p>Makhiwane's marketing Seminars assist your organization as a whole gain an intricate understanding of the importance of an excellent public image</p>
                <a href="#" onClick={()=>navigate("/services#services-hr")}>GET STARTED</a>
            </article>
            <section className="image-container">
                <img src="./img/gallery-2.jpg" alt="Makhiwane Marketing Services" />
            </section>
            <section className="image-container">
                <img src="./img/gallery-3.jpg" alt="Makhiwane Logistics Services" />
            </section>
            <section className="video-container">
                <video src="./img/gallery-4.mp4"  autoPlay  loop controls></video>
            </section>
            <article className="marketing">
                <h3>HUMAN CAPITAL TRAINING</h3>
                <p>At Makhiwane, we have a range of consultants designed to train your staff across departments in order to assist improve organizational culture</p>
                <a href="#" style={{backgroundColor : "lightseagreen"}} onClick={()=>navigate("/services#services-hr")}>GET STARTED</a>
            </article>
             
        </section>
    </section>
  )
}

export default Portfolio


