import React from 'react'
import Feature from '../../components/feature/Feature'
import {DataFeatures} from './content'
const Features = () => {
    return (
        <div className='features'>
            {DataFeatures.map((feature,index)=>
            <Feature title={feature.title} text={feature.text} icon={feature.icon} />)}
            
        </div>
    )
}

export default Features
