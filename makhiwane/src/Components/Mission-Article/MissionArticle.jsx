import React from 'react'
import "./Mission-Article.css"
import { useNavigate } from 'react-router-dom'
const MissionArticle = () => {
  const navigate = useNavigate()
  return (

    <section id="mission-article">
       <article className="who-we-are">
          <div className="orange-bar"></div>
          <p>VISION AND MISSION STATEMENT</p>  

          <section className="mission-article-content">
            <aside className="mission-article-image"></aside>
            <article className="mission-article-writing-and-button">
                <section className="">
                    <h3>OUR MISSION</h3>
                    <p>Our aim at Makhiwane is to cultivate business management for all SMMEs in product manufacturing and service providers so that they are able to distinguish between self-employment and being entrepreneurs or intrapreneurs</p>
                </section>
                <section className="">
                    <h3>OUR VISION</h3>
                    <p>At Makhiwane We aim to be the best SMME incubators, business rescuers/coaches for boosting competitiveness and fierce market penetration of all our customers. With a strong stance on our company values in line with our motto, we are committed to the best business-to-business relationships, producing the best value for profitability.
                       We intend to be an accessible, superlative partner of choice for SMME product manufacturers.
                       Our objective is to provide innovation hubs and a best practices center of excellence</p>
                </section>

                <button onClick={()=>navigate( "/services#services-hr")}>GET STARTED</button>
            </article>
          </section>
        </article>  
    </section>
  )
}

export default MissionArticle
