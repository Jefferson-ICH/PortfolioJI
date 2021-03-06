import React, { useState } from 'react'
import "./Header.css"
import logo from '../pic/pixlr-bg-result (1).png'

const Header = () => {
// 
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header")
      header.classList.toggle("active", window.scrollY > 79)
    })
    //toggle menu

const [Mobile, setMobile] = useState(false)

return (
    <>
        <header className='header'>
            <div className='container d_flex'>
                <div className='logo'>
                    <img src={logo} alt=''/>
                </div>

                <div className='navlink'>                   
                    <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)} >
                        {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                        <li>
                            <a href='#home'>Inicio</a>
                        </li>
                        <li>
                            <a href='#features'>Servicios</a>
                        </li>
                        <li>
                            <a href='#portfolio'>Portafolio</a>
                        </li>
                        <li>
                            <a href='#resume'>Sobre Mí</a>
                        </li>                    
                        <li>
                            <a href='#blog'>Blog</a>
                        </li>
                        <li>
                            <a href='#contact'>Contactos</a>
                        </li>                    
                    </ul>
                    
                    <button className='toggle' onClick={() => setMobile(!Mobile)}> 
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                    </button>
                </div>                
            </div>
        </header>
    </>
)
}

export default Header