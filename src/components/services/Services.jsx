import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Que puedo ofrecer</h5>
      <h2>Servicios</h2>
    
      <div className='container services__container'>
    <article className="service">
        <div className="service__head">
          <h3>Reparacion de Computadoras</h3>
        </div>
    

    <ul className='service__list'>
    
    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </ul>
    </article>
    {/*Final 1 */}

    <article className="service">
        <div className="service__head">
          <h3>Creación de páginas Web</h3>
        </div>
    

    <ul className='service__list'>
    
    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </ul>
    </article>
    {/*Final 3*/ }
    <article className="service">
        <div className="service__head">
          <h3>Manejo de redes sociales</h3>
        </div>
    

    <ul className='service__list'>
    
    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    <li> <BiCheck className='service__list-icon'/> </li>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </ul>
    </article>
    </div>
    </section>
    

  )
}

export default Services