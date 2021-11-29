import React from 'react';
import {HeroPhoto,circle} from './import_img'

const Header = () => (
    <div className='header__bg'>
            <div className="header section__padding" id="home">
                <div className="header__content">
                    <h1 className="hero__text">Повышайте продажи<br></br> с помощью аналитики<br></br> Wildberries</h1>
                                                                    
                    <p>Самая глубокая и точная внутренняя аналитика и<br></br> конкурентный анализ на Wildberries</p>


                    <div className="header__content-knowMore">
                        <img src={circle} alt='know-more'/>
                        <a>Узнать больше</a>
                    </div>

                    <div className="header__content-demoAsk">
                        <button type="button">Попробовать 7 дней бесплатно</button>
                        <button type="button">Запросить демо-режим</button>
                    </div>

                    
                </div>

                <div className="header__image">
                    <img src={HeroPhoto} alt='phone-laptop' />
                </div>
            </div>
    </div>
);

export default Header;