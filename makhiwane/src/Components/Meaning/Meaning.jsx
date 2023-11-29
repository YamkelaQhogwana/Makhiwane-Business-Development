import React from 'react'
import "./Meaning.css"
import { useNavigate } from 'react-router-dom'
const Meaning = () => {
  const navigate = useNavigate()
  return (

    <section id="meaning">
       <article className="who-we-are">
          <div className="orange-bar"></div>
          <p>BLOG: BEHIND OUR NAME</p>  

          <section className="mission-article-content">
            <aside className="mission-article-image"></aside>
            <article className="mission-article-writing-and-button">
                <section className="">
                    <h3>MAKHIWANE : MEANING AND ORIGIN</h3>
                    <p>Makhiwane may be described as a Xhosa term that refers to the art of humanity or ubuntu, namely uplifting one another. It is derived from the Xhosa word "ukwakha" meaning building something up, and may be described as a call for humans to start pouring into the journeys of those around them. 
                        Its meaning is closely aligned to the ethos of Makhiwane Business Development, which include building up small businesses as well as organizations, and ultimately communities through empowering training seminars, and customized solutions.  
                     </p>
                </section>
                

                <button onClick={()=>navigate( "/services#services-hr")}>GET STARTED</button>
            </article>
          </section>
        </article>  
    </section>
  )
}

export default Meaning;
