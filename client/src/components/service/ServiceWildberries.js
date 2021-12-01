import React from 'react'
import {ServiceContent, ServiceImage } from './ServiceContent'



const ServiceContenSideWildberries=({title,spcWord,text,services,index})=>{
    return(
            <div className='ServiceWildberries__content'>
                <ServiceContent title ={title} spcWord ={spcWord} text ={text} services ={services} index ={index} />
                <div className='ServiceWildberries__content-askDemo'>
                        <button type="button"  >Попробовать 7 дней бесплатно</button>
                        <button type="button" >Запросить демо-режим</button>
                </div>
            </div>
    )

}


const ServiceWildberries = ({title,spcWord,text,services,img,index}) => {
    return (
        <div className='ServiceWildberries'>
            {
                (index%2==0)? (
                    <>
                        <ServiceImage img={img}/>
                        <ServiceContenSideWildberries title={title} spcWord={spcWord} text={text} services={services} index={index+1} />
                    </>
                ): 
                (
                    <>
                        <ServiceContenSideWildberries title={title} spcWord={spcWord} text={text} services={services} index={index+1} />
                        <ServiceImage img={img}/>
                    </>
                )
            }
             
        </div>
    )
}

export default ServiceWildberries
