import React from 'react'
import { Card } from 'react-bootstrap'
import '../Views/Projects.css'

class Project extends React.Component {
  render () {
    return (
      <section className='card-container'>
        <article className='card card-cipher'>
          <figure className='copy'>
            <p className='p'>
             Cipher para DDHH es una plataforma para envío de mensajería
             instantánea para Defendores de Derechos Humanos.
             El proyecto está realizado con JS Vainilla, HTML y CSS.
            </p>
            <Card.Link className='link-animation' href='https://lawrayette.github.io/cipherparaddhh/src/' target='_blank'>DEMO</Card.Link>
            <Card.Link className='link-animation code' href='https://github.com/lawrayette/cipherparaddhh' target='_blank'>CÓDIGO</Card.Link>
          </figure>
        </article>
        <article className='card card-pokemon'>
          <figure className='copy'>
            <p className='p'>
             Pokedex es una plataforma web que ofrece al usuario los datos de los 150 Pókemons de la región Kanto.
             El proyecto está realizado con JS Vainilla, HTML y CSS.
            </p>
            <Card.Link className='link-animation' href='https://lawrayette.github.io/pokedex_datalovers/src/' target='_blank'>DEMO</Card.Link>
            <Card.Link className='link-animation code' href='https://github.com/lawrayette/pokedex_datalovers' target='_blank'>CÓDIGO</Card.Link>
          </figure>
        </article>
        <article className='card card-steam'>
          <figure className='copy'>
            <p className='p'>
            Punto STEAM es una red social enfocada a personas interesadas en la metodología STEAM como alternativa educativa.
             El proyecto está realizado con JS Vainilla, Firebase, HTML, CSS y Materialize.
            </p>
            <Card.Link className='link-animation' href='https://lawrayette.github.io/PuntoSteam/src/' target='_blank'>DEMO</Card.Link>
            <Card.Link className='link-animation code' href='https://github.com/lawrayette/PuntoSteam' target='_blank'>CÓDIGO</Card.Link>
          </figure>
        </article>
        <article className='card card-burger'>
          <figure className='copy'>
            <p className='p'>
             Burger Queen es una interfaz desarrollada para un restaurante de comida rápida. El objetivo es
             ofrecer mejoras en la calidad de servicio a cliente. El proyecto se realizó con React + Redux, HTML, CSS y Firebase.
            </p>
            <Card.Link className='link-animation' href='https://burgerqueen-fe5d7.firebaseapp.com/' target='_blank'>DEMO</Card.Link>
            <Card.Link className='link-animation code' href='https://github.com/lawrayette/BurgerQueen' target='_blank'>CÓDIGO</Card.Link>
          </figure>
        </article>
      </section>
    )
  }
}

export default Project
