import React from 'react'
import StarsRate from  '../starsRate/StarsRate'

const Feedback = ({userImg,userName,text,category,rating}) => {
    return (
        <>
            <div className='feedback__userImg'>
            {!userImg? 
                 (<span></span>):
                 (<img src={userImg}/>
            )}
                
            </div>
            <div className='feedback__content'>
                <div className='feedback__content-icons'>
                    <span>"</span>
                    <span><StarsRate rating={rating}/></span>
                </div>

                <p> 
                    {text}
                </p>

                <div className='feedback__content-signature'>
                    <h3>{userName}</h3>
                    <span>{category}</span>
                </div>
            </div>
        </>
    )
}

export default Feedback
