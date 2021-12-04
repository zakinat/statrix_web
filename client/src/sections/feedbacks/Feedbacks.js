import React,{useState} from 'react'
import {Feedback} from '../../components'
import {DataFeedbacks} from './feedbacksContent'
import {IoIosArrowDroprightCircle ,IoIosArrowDropleftCircle} from "react-icons/io"

const Feedbacks = () => {
const [current,setCurrent] =useState(0)
const [hoverRight,setHoverRight] =useState(false)
const [hoverLeft,setHoverLeft] =useState(false)


const length=DataFeedbacks.length

const nextFeedbacks=()=>{
    setCurrent( current===length-1?0:current+2)
}

const prevtFeedbacks=()=>{
    setCurrent( current===0?length-1:current-2)
}



    return (
        <div className='feedbacks section__padding'>
                <h2>Наши пользователи о нас </h2>
               
                <div className='feedbacks__content'>
                                {
                                DataFeedbacks.map((feedback,index)=>{
                            return (
                                <div className={(index ===current || index===current+1)? 'feedback feedback__active':'feedback'}>
                                    {
                                        (index ===current || index===current+1) &&
                                        (
                                            <Feedback userImg={feedback.photo}  userName={feedback.name}  text={feedback.text}  category={feedback.category}  rating={feedback.rating} />
                                        )
                                    }
                                </div> 
                            )
                        })
                    }
                </div>
                <IoIosArrowDropleftCircle className='leftArrow' color={hoverLeft?'#0B7ACD':"#97CBF1"} size={60} onClick={prevtFeedbacks} onMouseEnter={()=>setHoverLeft(true)} onMouseLeave={()=>setHoverLeft(false)}/>
                <IoIosArrowDroprightCircle className='rightArrow' color={hoverRight?'#0B7ACD':"#97CBF1"} size={60} onClick={nextFeedbacks} onMouseEnter={()=>setHoverRight(true)} onMouseLeave={()=>setHoverRight(false)}/>
       
        
        </div>
    )
}

export default Feedbacks
