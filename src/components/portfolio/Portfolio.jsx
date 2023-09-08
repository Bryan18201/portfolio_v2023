import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>Mis últimos proyectos</h5>
        <h2>Portfolio</h2>
        
        <div className='container portfolio__container' data-aos="fade-left" data-aos-duration="3000">
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>Corrugados MA Landing Page</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Bryan18201/MaCorrugados-LandingPage" className='btn' target='_blank' rel='noreferrer'>Github</a>
        <a href="https://macorrugados.netlify.app/" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo Online</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG2} alt="" />
        </div>
        <h3>RickAndMorthy API</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Bryan18201/rick-morty-api" className='btn' target='_blank' rel='noreferrer'>Github</a>
        <a href="https://quiet-paletas-012dcb.netlify.app/" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo Online</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG3} alt="" />
        </div>
        <h3>BM MASTER PC ECOMMERCE</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Bryan18201/ecommerce_with_sanity" className='btn' target='_blank' rel='noreferrer'>Github</a>
        <a href="https://ecommerce-with-sanity-eta.vercel.app/" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo Online</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG4} alt="" />
        </div>
        <h3>CotizaYa</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Bryan18201/cotizador_php" className='btn' target='_blank' rel='noreferrer'>Github</a>
        <a href="https://cotizaya.000webhostapp.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo Online</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG5} alt="" />
        </div>
        <h3>BM MEDIA YouTube Clone</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Bryan18201/bm_media_clone_yt" className='btn' target='_blank' rel='noreferrer'>Github</a>
        <a href="https://bmmedia.netlify.app/" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo Online</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG6} alt="" />
        </div>
        <h3>FullStack Blog</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Bryan18201/blog-api-project" className='btn' target='_blank' rel='noreferrer'>Github</a>
        <a href="https://blog-api-0nw1.onrender.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo Online</a>
        </div>
        </article>
        </div>
    </section>
  )
}

export default Portfolio