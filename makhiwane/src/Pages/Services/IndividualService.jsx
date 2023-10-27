import React from 'react'
import { Suspense } from 'react';
import { Carousel } from '@mantine/carousel';
import { FaSpinner } from 'react-icons/fa';
import { useRef } from 'react';
import { useEffect } from 'react';
import classes from './Demo.module.css';
import { humanResourcesServices } from './individual-services.js';
import { marketingServices } from './individual-services.js';
import { productAndAnalyticsServices } from './individual-services.js';
import { businessPackages } from './individual-services.js';
import LoadingIndicator from '../../LoadingIndicator';
const IndividualServiceFront = React.lazy(()=>import('./IndividualServiceFront'));
const IndividualServiceBack = React.lazy(()=>import('./IndividualServiceBack'));
import { logisticsAndSupplyChainServices } from './individual-services.js';
import { useLocation } from 'react-router-dom';


const IndividualService = () => {
   const hrSectionRef = useRef(null);
   const marketingRef = useRef(null);
   const analyticsRef = useRef(null);
   const logisticsRef = useRef(null);
   const packagesRef = useRef(null);
   const location = useLocation();

    useEffect(() => {
    if (location.hash === '#services-hr') {
      hrSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#services-marketing') {
      marketingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#services-analytics') {
      analyticsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#services-logistics') {
      logisticsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#services-packages') {
      packagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  
    
  return (
   
    <section className='categories-container'>
    <section className="hr" id="services-hr" ref={hrSectionRef}>
      
      <h3>HUMAN RESOURCES</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {humanResourcesServices.map((service)=>{
        return(
           <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}
    >
      <Carousel.Slide>
        
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    <section className="marketing" id="services-marketing" ref={marketingRef}>
      
      <h3>MARKETING</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {marketingServices.map((service)=>{
        
        return(
          <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}
    >
      <Carousel.Slide>
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    <section className="analytics" id="services-analytics" ref={analyticsRef}>
      
      <h3>ANALYTICS</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {productAndAnalyticsServices.map((service)=>{
        return(
          <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}
    >
      <Carousel.Slide>
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    <section className="logistics" id="services-logistics" ref={logisticsRef}>
      
      <h3>LOGISTICS</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {logisticsAndSupplyChainServices.map((service)=>{
        return(
          <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}
    >
      <Carousel.Slide>
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    <section className="packages" id="services-packages" ref={packagesRef}>
      
      <h3>PACKAGES</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {businessPackages.map((service)=>{
        return(
          <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}
    >
      <Carousel.Slide>
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    </section>
   
  
  )
}

export default IndividualService

