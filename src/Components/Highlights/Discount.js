import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../Utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 20
    }


    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}</span>
                            <span>niñas</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Proyectos</h3>
                            <p>Visita sus proyectos, comenta, comparte, crea, remixea.</p>
                            <MyButton
                                text="Dale click! :)"
                                bck="#14424a"
                                color="#ffffff"
                                link="https://scratch.mit.edu/studios/25222639/"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;