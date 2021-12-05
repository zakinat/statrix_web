import React,{useState} from 'react'
import { BubbleFaq } from '../../components'
import {DataFAQ} from './FAQContent'
const FAQ = () => {
    const [clickedCard,setClickedCard] =useState(false)
    return (
        <div className='FAQ section__padding'>

        <div className='FAQ__introduction '>
            <h3>Все еще думаете?</h3>
            <h3>Узнайте больше о сервисе ниже!</h3>
            <span className='arrow_down'> </span>
        </div>

        <div className='FAQ__content'>
        <BubbleFaq/>
        <h2>Часто задаваемые вопросы</h2>

            <div className='FAQ__content-qustions'>
                {DataFAQ.map((QA,index)=>{
                    return(
                        <div className={`FAQ__content-qustions-card ${clickedCard===index? 'card__opened':''}`} onClick={()=>setClickedCard(clickedCard===index? false:index)} key={index}>
                            <div className='FAQ__content-qustions-card-QA'>
                                <p className='FAQ__content-qustions-card-QA-Q'>{QA.Q}</p>
                                <p className='FAQ__content-qustions-card-QA-A'>{QA.A}</p>
                            </div>
                            <span>{clickedCard===index? '-':'+'}</span>
                            
                        </div>
                        
                    )
                })}

            </div>

        </div>

        <div className='FAQ__conclusion'>
        <h1>Нам доверяют уже более 500 брендов</h1>
        <button type="button"  >Попробовать 7 дней бесплатно</button>


        </div>
            
        </div>
    )
}

export default FAQ
