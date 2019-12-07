import React, { Component } from "react";
import Firebase from "../../firebase";
import Zoom from "react-reveal/Zoom";

class fathers extends Component {
  constructor(props) {
    super(props);
    this.ref = Firebase.firestore().collection("tlaxcalaPadres");
    this.unsubscribe = null;
    this.state = {
      dataComments: []
    };
  }

  onCommentUpdate = querySnapshot => {
    const dataComments = [];
    querySnapshot.forEach(doc => {
      const { girlinTech } = doc.data();
      dataComments.push({
        key: doc.id,
        doc,
        girlinTech
      });
    });
    this.setState({
      dataComments
    });
  };
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCommentUpdate);
  }

  render() {
    return (
      <Zoom delay="500">
        <div className="bck_white">
          <article className="center_wrapper pricing_section1">
            <h2>Los padres opinan</h2>
            <h4>¿Por qué crees que no hay muchas mujeres en las TI?</h4>
          </article>
          <article className="pricing_wrapper1">
            {this.state.dataComments.map(data => (
              <div className="pricing_item1">
                <div className="pricing_inner_wrapper1">
                  <p className="pricing_title1">{data.girlinTech}</p>
                </div>
              </div>
            ))}
          </article>
        </div>
      </Zoom>
    );
  }
}

export default fathers;
