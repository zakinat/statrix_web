import React from 'react'
import {ServiceContent, ServiceImage } from './ServiceContent'



const ServiceContentWilberries=({title,spcWord,text,services,index})=>{
    return(
            <div className='service__content serviceWildberries__content'>
                <ServiceContent title ={title} spcWord ={spcWord} text ={text} services ={services} index ={index} />
                <div className='ServiceWildberries__content-askDemo'>
                        <button type="button"  >Попробовать 7 дней бесплатно</button>
                        <button type="button" >Узнать больше</button>
                </div>
            </div>
    )

}


const ServiceWildberries = ({title,spcWord,text,services,img,index}) => {
    return (
        <div className='service servic__Wildberries'>
            {
                (index%2===0)? (
                    <>
                        <ServiceImage img={img} imgSide={'leftImage'}/>
                        <ServiceContentWilberries title={title} spcWord={spcWord} text={text} services={services} index={index+1} />
                    </>
                ): 
                (
                    <>
                        <ServiceContentWilberries title={title} spcWord={spcWord} text={text} services={services} index={index+1} />
                        <ServiceImage img={img} imgSide={'rightImage'}/>
                    </>
                )
            }
             
        </div>
    )
}

export default ServiceWildberries
