import React from 'react'
import {ServiceWildberries} from '../../components'
import {DataServices,title} from './contentWildberries'


const Services = () => {
    return (
        <div className='services section__padding'>
            <h1>{title}</h1>
            <div className='services__content'>
                {DataServices.map((service,index)=>
                <ServiceWildberries title={service.title} spcWord={service.spcWord} text={service.text} services={service.services} img={service.img} index={index} />)}
            </div>
            
        </div>
    )
}

export default Services
