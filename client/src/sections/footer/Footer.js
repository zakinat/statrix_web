import React from 'react'
import { BsTelegram,BsYoutube } from "react-icons/bs";
import {FaInstagramSquare} from  'react-icons/fa';
import logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <div className='footer section__padding'>
            <div className='footer__socialMedia'>
                <small>Оствайтесь в курсе наших новостей</small>
                <span><FaInstagramSquare size={28} color={'#c13584'}/></span>
                <span><BsYoutube size={28} color={'#ff0000'}/></span>
                <span><BsTelegram size={28} color={'#0088cc'}/></span>
            </div>
            <div className='footer__content'>
                <div className='footer__content-brand'>
                    <img src={logo} alt='logo'/>
                    <div className='footer__content-brand-contacts'>
                        <span>+7 968 670 12 54</span>
                        <span>statrix-manager@gmail.com</span>
                        <span>@statrix</span>
                     </div>
                </div>

            <div className='footer__content-mainLinks'>
                <h3>Главная</h3>
                <h3>Блог</h3>
            </div>
            <div className='footer__content-ourproducts'>
                <h3>Наши продукты</h3>
                <span>Внутренняя аналитика</span>
                <span>Конкурентный анализ</span>
            </div>
            <div className='footer__content-moreConditions'>
                <h3>Доп. услуги</h3>
                <span>Консалтинг</span>
                <span>SEO оптимизация</span>
            </div>
            <div className='footer__content-aboutUs'>
                <h3>О компании</h3>
                <span>О нас</span>
                <span>Контакты</span>
            </div>


            </div>
            <div className='footer__copyright'>
                <small>©2021 StatriX. Аналитика и статистика продаж. Все права защищены.</small>
                <div className='footer__copyright-tags'>
                    <small>Договор-оферта</small>
                    <small>Политика конфиденциальности</small>
                </div>

            </div>
            
        </div>
    )
}

export default Footer
