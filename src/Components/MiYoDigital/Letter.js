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
        this.ref = Firebase.firestore().collection('letter')
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
      <div style={{backgroundColor:"#bea6f0"}}>
<SectionHacklab  id='comment_container'>
    <ProyectLabel>Carta a mi Yo del pasado</ProyectLabel>
       {this.state.dataText.map((data, i) =>
        <div id='card_quanty' key={i}>
          <div onClick={this.onClick}>
            <CopyDecription style={{padding: "2%", backgroundColor:"white",margin:"2%",  borderRadius:"25px"}} color='textSecondary' gutterBottom>
             {data.letter}
            </CopyDecription>


          </div>
        </div>
      )}
      </SectionHacklab >
      </div>
    )
  }
}

export default final