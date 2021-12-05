import React from 'react'
import {Feature} from '../../components'
import {DataFeatures} from './content'
const Features = () => {
    return (
        <div className='features'>
            {DataFeatures.map((feature,index)=>
            <Feature title={feature.title} text={feature.text} icon={feature.icon} key={index}/>)}
            
        </div>
    )
}

export default Features
