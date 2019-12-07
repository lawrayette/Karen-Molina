import React from 'react'
import Zoom from 'react-reveal/Zoom'
import icon_calendar from '../../Resoures/resources/images/icons/calendar.png'
import icon_location from '../../Resoures/resources/images/icons/location.png'

const VunueNfo = () => {
  return (
    <div className='bck_black'>
      <div className='center_wrapper'>
        <h1 className='next-workshop'>Próximo taller:</h1>
        <div className='vn_wrapper'>
          <Zoom duration={500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_blue2' />
                  <div
                    className='vn_icon'
                    style={{
                      background: `url(${icon_calendar})`
                    }}
                  />
                  <div className='vn_title'>
                                        Fecha
                  </div>
                  <div className='vn_desc'>
                                        Del 3 al 9 de novimebre.
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_yellow' />
                  <div
                    className='vn_icon'
                    style={{
                      background: `url(${icon_location})`
                    }}
                  />
                  <div className='vn_title'>
                                        Sede
                  </div>
                  <div className='vn_desc_sede'>
                                        La Colmena. Av. Juárez no. 62, Col. Centro, Tlaxcala.
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default VunueNfo
