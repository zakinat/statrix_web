import React from 'react'
import {Feature} from '../../components'
import {DataFeatures} from './content'
const Features = ({classname}) => {
    return (
        <div className={`features ${classname}`}>
            {DataFeatures.map((feature,index)=>
            <Feature title={feature.title} text={feature.text} icon={feature.icon} key={index}/>)}
            
        </div>
    )
}

export default Features
