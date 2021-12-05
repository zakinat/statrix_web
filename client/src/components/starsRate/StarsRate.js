import React from 'react'
import {FaStar} from 'react-icons/fa'

const StarsRate = ({rating}) => {

    

    return (
        <div className="stars">
          { [...Array(5)].map((star,index)=>{
            const ratingValue=index+1

            return (
                
                    <FaStar className='star'
                            color={ratingValue<=rating?'#FF9500':'#e4e5e9'}
                            size={20} 
                            key={index}
                            />
                
            )
          }
          
          )}
        </div>
    )
}

export default StarsRate
