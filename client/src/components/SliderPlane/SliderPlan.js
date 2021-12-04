import React,{useState} from 'react'

const SliderPlan = ({min,max,classname,title,value}) => {

const [valueSlider,setValueSlider]=useState(value? value:0)
    return (
        <div className={classname}>
            <h3>{title}</h3>
            <span>{valueSlider+' '} ₽</span>
            
                <input
            type="range"
            min={min}
            max={max}
            className='slider'
            onChange={(e)=>setValueSlider(e.target.value)}
        />
        
            
        </div>
    )
}

export default SliderPlan
