
const DataLinks=[
    {
        plcHolder:'Внутренняя аналитика',
        toWhere:'home',
        spcWord:'',
    },
    {
        plcHolder:'Конкурентный анализ',
        toWhere:'home',
        spcWord:'скоро',
    },
    {
        plcHolder:'Тарифы',
        toWhere:'home',
        spcWord:'',
    },
    {
        plcHolder:'Доп. услуги',
        toWhere:'home',
        spcWord:'',
    },
    {
        plcHolder:'О компании',
        toWhere:'home',
        spcWord:'',
    },
    {
        plcHolder:'Блог',
        toWhere:'home',
        spcWord:'',
    },
]

const Link =({toWhere,plcHolder,clsToggle,spcWord})=>{
    return(
        <p>
            {spcWord.length>0 && <span className='Link__badge'>{spcWord}</span>}
            <a  href={`#${toWhere}`} onClick={clsToggle?()=>clsToggle(false):undefined}>{plcHolder}</a>
        </p>
    )
    
}


const Menu =({clsToggle})=>{
    return(
        <>
         {DataLinks.map((link,index)=>
            <Link toWhere={link.toWhere} plcHolder={link.plcHolder} spcWord={link.spcWord} clsToggle={clsToggle} key={link.toWhere+index}/>)}
        </>
    )
    
}

export {Menu}