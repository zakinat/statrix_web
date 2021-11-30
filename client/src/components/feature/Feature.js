import React from 'react'


const Feature = ({title,text,icon}) => {
    return (
        <div className='feature'>
            <div className='feature__content'>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <div className='feature__icon'>
                <img src={icon} alt='icon'/>
            </div>
            

            
        </div>
    )
}

export default Feature
