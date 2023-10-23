import React, { Suspense } from 'react'
import Hero from "../Components/Hero-Section/Hero.jsx"
import Services from "../Components/Services-Section/Services.jsx"
import Portfolio from '../Components/Gallery/Portfolio.jsx'
import About from '../Components/About/About.jsx'
import Mission from '../Components/Mission/Mission.jsx'
import Values from "../Components/Values/Values"
import MissionArticle from "../Components/Mission-Article/MissionArticle.jsx"
import FAQs from "../Components/FAQs/FAQs.jsx"
import ContactUs from "../Components/ContactUs/ContactUs.jsx"
import { FaSpinner } from 'react-icons/fa'
const isLoading = () =>{
  return (
       <div className="loading" style={{ width : "98%", minHeight : "600px", display : "grid", placeContent : "center"}}>
         <FaSpinner className="loading-spinner" style={{height : "100px", width : "100px", fill : "lightseagreen"}} />
      </div>
  )
}
const Website = () => {
  return (
    <div className='App'>
      <Suspense fallback={<isLoading></isLoading>}>
        <Hero></Hero>
      </Suspense>
      <Services/>
      <Suspense fallback={<isLoading></isLoading>}>
      <Portfolio/>
      </Suspense>
      <Mission/>
      <About/>
      <Suspense fallback={<isLoading></isLoading>}>
     <Values></Values>
     </Suspense>
      <MissionArticle/>
      <FAQs/>
      <ContactUs/>
         
    </div>
  )
}

export default Website
