import React from 'react'

const ServiceContent = ({title,spcWord,text,services,index}) => {
    return (
        <div className='service__content-info'>
            <div className='service__content-info-title'>
                <span className='service__content-info-title-index'>{index}</span>
                <h2>{title}</h2>
                {spcWord.length>0 && <span className='title__badge'>{spcWord}</span>}
            </div>
            <div className='service__content-info-text' >
                <p>{text}</p>
            </div>
            <div className='service__content-info-services'>
                {services.map((service,index)=>
                <div className='service__content-info-services-service'>
                    <span></span>
                    <p>{service}</p>
                </div>)}
            </div>
        </div>
    )
}

const ServiceImage=({img,imgSide})=>{
    return(
            <div className={`service__img `}>
                <div className={`${imgSide}`}></div>
                <img src={img} alt='service image1'/>
            </div>
    )
}



export  {ServiceContent, ServiceImage }
