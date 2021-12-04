import React from 'react'
import {SliderPlan} from '../../components'

const Tariffs = () => {
    return (
        <div className='tariffs section__padding'>

            <h2>Тарифы</h2>
            <div className='tariffs__content'>

                <div className='tariffs__content-form'>
                    <form className='tariffs__content-form-product'>
                        
                        <div className='tariffs__content-form-product-checkbox'>
                            <h4>Выберите продукт:</h4>

                            <div className='tariffs__content-form-product-checkbox-planActive'>
                                <input type="checkbox" name='productInside-analyis'/>
                                <label htmlFor="productName">Внутренняя аналитика</label>
                            </div>
                            <div className='tariffs__content-form-product-checkbox-planNotActive'>
                                <input type="checkbox" name='productSpecific-analyis'/>
                                <label htmlFor="productSpecific-analyis">Конкурентный анализ</label>
                                <span className='product__badge'>скоро</span>
                            </div>
                            
                        </div>
                        <SliderPlan min={0} max={1500000} classname='tariffs__content-form-product-rangeSlider' title={'Предполагаемая выручка'}/>
                        <p>Предварительный расчёт</p>
                    </form>

                    <p>У нас гибкое ценообразование: цена зависит от ежемесячной выручки. Учитывается выручка после комиссии маркетплейса на момент оплаты. Если в течение оплаченного периода она увеличивается, цена не меняется</p>
                    <button type="button"  >Попробовать 7 дней бесплатно</button>

                </div>
                <div className='tariffs__content-prices'>
                    <div className='tariffs__content-prices-plan'>
                        <h3>Месячный</h3>
                        <span>1 990 ₽ (1 990 ₽/мес.)</span>
                    </div>
                    <div className='tariffs__content-prices-plan'>
                        <h3>На 6 месяцев</h3>
                        <span>11 350 ₽ (1 890 ₽/мес.)</span>
                    </div>
                    <div className='tariffs__content-prices-plan'>
                        <h3>На 12 месяцев</h3>
                        <span>21 500 ₽ (1 791 ₽/мес.)</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Tariffs
