import React from 'react';
import BubbleHeader from '../../components/bubble/BubbleHeader';
import Features from '../features/Features';
import {HeroPhoto,circle} from './import_img'

const Header = () => (
    
            <div className="header header__bg section__padding" id="home">
                <BubbleHeader/>
                <div className='header__hero'>
                        <div className="header__hero-content">
                            <h1 className="hero__text">Повышайте продажи<br></br> с помощью аналитики<br></br> Wildberries</h1>
                                                                            
                            <p>Самая глубокая и точная внутренняя аналитика и<br></br> конкурентный анализ на Wildberries</p>

                            <div className="header__hero-content-knowMore">
                                <img src={circle} alt='know-more'/>
                                <a href='#home'>Узнать больше</a>
                            </div>

                            <div className="header__hero-content-demoAsk">
                                <button type="button"  >Попробовать 7 дней бесплатно</button>
                                <button type="button" >Запросить демо-режим</button>
                            </div>

                            
                        </div>

                        <div className="header__hero-image">
                            <img src={HeroPhoto} alt='phone-laptop' />
                        </div>
                </div>

                <div className='header__features'>
                    <Features/>
                </div>
                
            </div>
);

export default Header;