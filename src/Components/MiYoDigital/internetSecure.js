import React, { Component } from 'react'
import Firebase from '../../Firebase'
import {
    SectionHacklab,
    ProyectLabel,
    CopyDecription,
  } from "../../styles/styles";

class final extends Component {
    constructor(props) {
        super(props)
        this.ref = Firebase.firestore().collection('internetsecure')
        this.unsuscribe = null
        this.state = ({
            dataText: [ ],
        })
    }

   onTextUpdate = (querySnapshot) => {
        const dataText = [ ]
        querySnapshot.forEach((doc) => {
          const { letter } = doc.data()
          dataText.push({
            key:doc.id,
            doc,
            letter
          })
        })
        this.setState({
          dataText
        })
      }
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onTextUpdate)
      }

  render () {
    return (
      <div style={{backgroundColor:"#e9d4b0"}}>
<SectionHacklab className='container'>
    <ProyectLabel>Carta a mi mejor amigo</ProyectLabel>
    <ProyectLabel>¿Por qué es importe la seguridad digital?</ProyectLabel>
       {this.state.dataText.map((data, i) =>
        <div id='card_quanty' key={i}>
            <CopyDecription style={{padding: "2%", backgroundColor:"white",margin:"2%",  borderRadius:"25px"}} color='textSecondary'>
             - {data.letter}
            </CopyDecription>
        </div>
      )}
      </SectionHacklab>
      </div>
    )
  }
}

export default final