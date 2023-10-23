import React from 'react'
import { Suspense } from 'react';
import { Carousel } from '@mantine/carousel';
import { FaSpinner } from 'react-icons/fa';
import classes from './Demo.module.css';
import { humanResourcesServices } from './individual-services.js';
import { marketingServices } from './individual-services.js';
import { productAndAnalyticsServices } from './individual-services.js';
import { businessPackages } from './individual-services.js';
import LoadingIndicator from '../../LoadingIndicator';
const IndividualServiceFront = React.lazy(()=>import('./IndividualServiceFront'));
const IndividualServiceBack = React.lazy(()=>import('./IndividualServiceBack'));
import { logisticsAndSupplyChainServices } from './individual-services.js';



const IndividualService = () => {

  
    
  return (
   
    <section className='categories-container'>
    <section className="hr">
      
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
    <section className="marketing">
      
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
    <section className="analytics">
      
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
    <section className="logistics">
      
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
    <section className="packages">
      
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

