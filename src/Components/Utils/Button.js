import React from 'react'
import styled from "styled-components";

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant='contained'
      size='medium'
    >
      {props.text}
    </Button>
  )
}

const Button = styled.a`
padding:1%;
border-radius:25px;
font-size:16px;
background: rgb(55, 1, 71);
color:white;
text-decoration: none;
&:hover{
  transition: all 1s;
  background: #aa1fd6;
}
`;


export default MyButton
