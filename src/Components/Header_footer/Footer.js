import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <footer className='bck_red'>
      <Fade delay={500}>
        <div className='font_righteous footer_logo_venue'>Laboratorio de Ciudadanía Digital</div>
        <div className='footer_copyright'>
        LCD es una iniciativa del CCEMx, Fundación Telefónica, Ateneo Español de México A.C y La Caixa.
        </div>
      </Fade>
    </footer>
  )
}

export default Footer
