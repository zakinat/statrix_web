import React,{useState} from 'react'
import {RiMenu3Line,RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

import {Menu} from './MenuLinks'


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div className='navbar section__padding'>
            <div className='navbar__links'>
                <div className='navbar__links-logo'>
                   <a href='#home'><img src={logo}  alt='logo'/></a>
                </div>
                <div className='navbar__links-container'>
                   <Menu/>
                </div>
            </div>

            <div className='navbar__sign'>
                   <button type="button">Войти </button>
            </div>

            <div className='navbar__menu'>
                    {toggleMenu
                        ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
                        
                    {toggleMenu &&
                    (
                        <div className='navbar__menu-container'>
                            <div className='navbar__menu-container-links-sign'>
                                <button type="button">Войти </button>
                            </div>
                            <div className='navbar__menu-container-links'>
                                <Menu clsToggle={setToggleMenu}/>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Navbar
