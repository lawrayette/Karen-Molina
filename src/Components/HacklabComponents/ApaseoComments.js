import React, { Component } from "react";
import Firebase from "../../Firebase";
import {
  SectionHacklab,
  ProyectLabel,
  CopyDecription,
} from "../../styles/styles";

class testimony extends Component {
  constructor(props) {
    super(props);
    this.ref = Firebase.firestore().collection("hcomments");
    this.unsubscribe = null;
    this.state = {
      dataComments: [],
    };
  }

  onCommentUpdate = (querySnapshot) => {
    const dataComments = [];
    querySnapshot.forEach((doc) => {
      const { girlinTech } = doc.data();
      dataComments.push({
        key: doc.id,
        doc,
        girlinTech,
      });
    });
    this.setState({
      dataComments,
    });
  };
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCommentUpdate);
  }

  render() {
    return (
      <SectionHacklab className="container">
        <article>
          <ProyectLabel>Las niñas opinan</ProyectLabel>
          <ProyectLabel>
            ¿Por qué crees que no hay muchas mujeres en las TI?
          </ProyectLabel>
        </article>
        <article className="comments_container">
          {this.state.dataComments.map((data) => (
            <div>
              <CopyDecription>{data.girlinTech}</CopyDecription>
            </div>
          ))}
        </article>
      </SectionHacklab>
    );
  }
}

export default testimony;
