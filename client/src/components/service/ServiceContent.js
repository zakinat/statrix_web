import React from 'react'

const ServiceContent = ({title,spcWord,text,services,index}) => {
    return (
        <div className='serviceContent'>
            <div className='serviceContent__title'>
                <soan>{index}</soan>
                <h2>{title}</h2>
                {spcWord.length>0 && <span className='title__badge'>{spcWord}</span>}
            </div>
            <div className='serviceContent__text' >
                <p>{text}</p>
            </div>
            <div className='serviceContent__services'>
                {services.map((service,index)=>
                <p>{service}</p>)}
            </div>
        </div>
    )
}

const ServiceImage=({img})=>{
    return(
            <div className='ServiceWildberries__img'>
                <img src={img}/>
            </div>
    )
}



export  {ServiceContent, ServiceImage }
