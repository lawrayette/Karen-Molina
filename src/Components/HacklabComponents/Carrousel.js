import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import One from "../../assets/IMG_20190925_162535.jpg"
import Two from "../../assets/colmena.jpg"
import Three from "../../assets/IMG_20190925_162411.jpg"
import Four from "../../assets/colmena2.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      fade: true,
      autoplay:true,
      infinite: true,
      speed: 500,
    };
    return (
      <div>
        <Slider {...settings}>
          <Image>
            <img src={One} style={{width:"100%"}} alt=""/>
          </Image>
          <Image>
          <img src={Two} style={{width:"100%"}} alt=""/>
          </Image>
          <Image>
          <img src={Three} style={{width:"100%"}} alt=""/>
          </Image>
          <Image>
          <img src={Four} style={{width:"100%"}} alt=""/>
          </Image>
        </Slider>
      </div>
    );
  }
}

const Image = styled.div`
  width:100%;

`;
