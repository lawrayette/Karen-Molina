import React, { Component } from 'react'
import MyButton from '../Utils/MyButton'
import Zoom from 'react-reveal/Zoom'

class project extends Component {
    state = {
        prices:[100,150,250],
        positions:['CipherxDDHH','Punto Steam','Hacklab (web)'],
        desc:[
            'Es una webapp que aplica la criptografía cecareana. Enfocado y dirigido para la enseñanza de la importancia de la seguridad digital y la criptografía en el taller Seguridad Digital para Morras, realizado en el CCD, 2019.',
            'Red social enfoncada para personas e instituciones interesadas en el movimiento educativo STEAM en México. Realizado con React, Firebase, CSS3, como parte de la serie de proeyectos en Laboratoria',
            'El taller Hacklab para niñas es un taller del LCD, enfocado a invitar a más niñas a unirse al mundo de la tecnología, por lo tanto se realizó una plataforma piloto para compilar evidencias y reflexiones en el taller.'
        ],
        linkto:['https://lawrayette.github.io/CipherCCD/','https://steamreact.web.app/','https://lcd-hacklab.firebaseapp.com/'],
        delay:[500,0,500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="project_item">
                    <div className="project_inner_wrapper">
                        <div className="project_title">
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="project_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="project_buttons">
                            <MyButton
                                text="Ver más..."
                                bck="#ea4b3b"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render () {
        return (
            <div className="bck_black">
                <div className="center_wrapper project_section">
                    <h2>Projectos</h2>

                    <div className="project_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default project
