import React, { Component } from "react";
import Firebase from "../../Firebase";
import {
  SectionHacklab,
} from "../../styles/styles";
import styled from "styled-components";

class testimony extends Component {
  constructor(props) {
    super(props);
    this.ref = Firebase.firestore().collection("comments");
    this.unsubscribe = null;
    this.state = {
      dataComments: [],
    };
  }

  onCommentUpdate = (querySnapshot) => {
    const dataComments = [];
    querySnapshot.forEach((doc) => {
      const { testimony } = doc.data();
      dataComments.push({
        key: doc.id,
        doc,
        testimony,
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
        <div id="ccd">
      <SectionHacklab className="container ">
        <article className="">
          {this.state.dataComments.map((data) => (
            <div>
              <P>{data.testimony}</P>
            </div>
          ))}
        </article>
      </SectionHacklab>
      </div>
    );
  }
}

export default testimony;

const P = styled.p`
font-size:20px;
color:white;
margin-bottom:3%;
@media (max-width: 768px) {
    font-size:18px;
  }
`;
