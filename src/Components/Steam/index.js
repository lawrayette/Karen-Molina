import React, { Component } from 'react'
import MyButton from '../Utils/MyButton'
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {
    state = {
        prices:[100,150,250],
        positions:['Hacklab para Niñas','Bio-Robots','Arduino'],
        desc:[
            'Adéntrate al mundo de la programación, desde una perspectiva de género, y desarrolla tus capacidades creativas y críticas para crear videojuegos o animaciones a través del remix de código.',
            'Sensibilizar a los niños y niñas sobre su papel en la conservación de la naturaleza, particularmente la importancia de cuidar las especies polinizadoras, utilizando la tecnología como herramienta de aprendizaje.',
            'Durante 2016 y 2017 estuve como docente invitada en Hacedores Makerspace, realizando actividades de enseñanza de electrónica, programación y fabricación digital a niños y jóvenes en espacios de deducación formal'
        ],
        linkto:['https://lcd-hacklab.firebaseapp.com/','https://rizomamutante.wordpress.com/2018/09/18/bio-robots-softcircuits-insectos-y-ambiente/','https://rizomamutante.wordpress.com/2018/09/18/colaborando-con-hacedores-makerspace/'],
        delay:[500,0,500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
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
                <div className="center_wrapper pricing_section">
                    <h2>STEAM Edu</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing
