import React, { Component } from "react";
import Firebase from "../../Firebase";
import styled from "styled-components";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const db = Firebase.firestore();
    db.collection("letter").add({
      letter: this.state.letter,
    });
    this.setState({
      letter: " ",
    });
  };
  render() {
    return (
      <div className="container">
        <Div className="">
          <Text
            placeholder="Carta a mi yo del pasado"
            rows="20"
            cols="110"
            type="letter"
            name="letter"
            onChange={this.onChange}
            value={this.state.letter}
          />

          <Button onClick={this.onSubmit}>Enviar</Button>
        </Div>
      </div>
    );
  }
}

export const Div = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;

export const Text = styled.textarea`
font-size:16px;
margin-top:5%;
margin-bottom:2%;
`;

export const Button = styled.button`
background: #7373ff;
    border: none;
    padding: 2%;
    margin: 0% 17%;
    border-radius: 20px;
    color: wheat;
    font-weight: 900;
    transition: .3s;
    &:hover{
        background: #191927;
        transform: translateY(-10px);
    }
`;