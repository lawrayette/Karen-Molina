import React, { Component } from 'react'
import Firebase from '../../Firebase'
import {
    SectionHacklab,
    ProyectLabel,
    CopyDecription,
  } from "../../styles/styles";
import { findLastIndex } from 'lodash-es';

class final extends Component {
    constructor(props) {
        super(props)
        this.ref = Firebase.firestore().collection('myinternet')
        this.unsuscribe = null
        this.state = ({
            dataText: [ ],
        })
    }

   onTextUpdate = (querySnapshot) => {
        const dataText = [ ]
        querySnapshot.forEach((doc) => {
          const { encode, decode } = doc.data()
          dataText.push({
            key:doc.id,
            doc,
            encode,
            decode
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
        <div style={{backgroundColor:"#9dd3d0"}}>
<SectionHacklab className='container'>
    <ProyectLabel>¿Qué haría si yo gobernara internet?</ProyectLabel>
    <CopyDecription>Reflexiones en texto cifrado y descifrado, usando la técnica de Julio César</CopyDecription>
       {this.state.dataText.map((data, i) =>
        <div id='card_quanty' key={i}>
          <div style={{display: "flex" }}onClick={this.onClick}>
            <CopyDecription style={{padding: "2%", backgroundColor:"white",margin:"2%",  borderRadius:"25px"}} color='textSecondary' >
              Cifrado: {data.encode}
            </CopyDecription>
 <CopyDecription style={{padding: "2%", backgroundColor:"#f0e8e9", margin:"2%", borderRadius:"25px"}} color='textSecondary' gutterBottom>
             Descifrado: {data.decode}
               </CopyDecription> 

          </div>
        </div>
      )}
      </SectionHacklab>
      </div>
    )
  }
}

export default final