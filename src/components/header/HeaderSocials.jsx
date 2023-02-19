import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bryan-ma%C3%B1on/" rel='noreferrer' target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Bryan18201" rel='noreferrer' target="_blank"> <FaGithub/></a>
        <a href="https://api.whatsapp.com/send?phone=18098202485 " rel='noreferrer'target="_blank"><ImWhatsapp/></a>
        </div>
  )
}

export default HeaderSocials