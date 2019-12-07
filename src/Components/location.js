import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.1817951698945!2d-98.24269029916479!3d19.317916086885493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd990bcfa0cfb%3A0xc77dc7a572fdf82a!2sLa%20Colmena%3A%20Centro%20de%20Tecnolog%C3%ADas%20Creativas%20Grace%20Quintanilla!5e0!3m2!1sen!2smx!4v1571437105428!5m2!1sen!2smx'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen
      />
      <div className='location_tag'>
        <div>Centro de Tecnologías Creativas: Grace Quintanilla</div>
      </div>
    </div>
  )
}

export default Location
