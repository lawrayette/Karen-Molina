import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom'

class talk extends Component {
    state = {
        prices:[100,150,250],
        positions:['DevHr','Eventloop','Edusol'],
        desc:[
            'Participé como ponente en el DevHr, el foro internacional del juego, con el tema: "Cuerpo expandido, el videojuego como prótesis."   Realizado en el 2018 en las instaalciones de la UAM-Azcapotzalco.',
            'En agosto del 2018 participé en EventLoop en una charla sobre "E-cuerpo", una reflexión sobre la relación del estudio de interfaces desde las ciencias sociales y el desarrollo de interfaces desde el UX hasta su implementación.',
            'En el Encuentro de Educación, Software y Cultura Libre, hablé sobre mi experiencia en el desarrollo e implementación de talleres  con tecnologías y pedagogías libres en espacios de educación formal y no formal. '
        ],
        linkto:['https://lcd-hacklab.firebaseapp.com/','https://rizomamutante.wordpress.com/2018/09/18/bio-robots-softcircuits-insectos-y-ambiente/','https://rizomamutante.wordpress.com/2018/09/18/colaborando-con-hacedores-makerspace/'],
        delay:[500,0,500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="talk_item">
                    <div className="talk_inner_wrapper">
                        <div className="talk_title">
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="talk_description">
                            {this.state.desc[i]}
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render () {
        return (
            <div className="bck_white">
                <div className="center_wrapper talk_section">
                    <h2>Charlas</h2>

                    <div className="talk_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default talk
