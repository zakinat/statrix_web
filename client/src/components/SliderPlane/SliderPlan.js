import React from 'react'

const SliderPlan = ({min,max}) => {
    return (
        <div>
            <input
        type="range"
        min={min}
        max={max}
        className="rangeSlider"
      />
      
        </div>
    )
}

export default SliderPlan
