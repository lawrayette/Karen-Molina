import React from 'react'
import { Card } from 'react-bootstrap'
import '../Views/Contact.css'

class Contact extends React.Component {
  render () {
    return (
      <main>
        <figure className='contact-container'>
          <Card.Link className='contact-animation cv' href='https://novoresume.com/a/milhadasdepapel.1' target='_blank'>CV</Card.Link>
          <Card.Link className='contact-animation email' href='mailto:karenemece@gmail.com' target='_blank'> Email</Card.Link>
          <Card.Link className='contact-animation gitHub' href='https://github.com/lawrayette' target='_blank'>Github</Card.Link>
          <Card.Link className='contact-animation linkedin' href='https://www.linkedin.com/in/karen-molinac/' target='_blank'>Linkedin</Card.Link>
          <Card.Link className='contact-animation twitter' href='https://mobile.twitter.com/voidrizoma' target='_blank'>Twitter</Card.Link>
        </figure>
      </main>
    )
  }
}

export default Contact
