import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container" data-aos="fade-right" data-aos-duration="3000" >
        <h3>Hola, yo soy</h3>
        <h1>Bryan José Mañón Colon</h1>
        <h4 className="text-light">Desarrollador Full Stack Web Junior</h4>
          <CTA/>
          <HeaderSocials/>
          <div className="me" data-aos="fade-zoom" data-aos-duration="4000">
            <img src= {ME}  alt="me"  />

          </div>
          <a href="#footer"  className='scroll__down' >Desplazar abajo</a>
         

      </div>
    </header>
  )
}

export default Header