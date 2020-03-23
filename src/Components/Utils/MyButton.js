import React from 'react'
import Button from '@material-ui/core/Button'

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant='contained'
      size='medium'
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      {props.text}
    </Button>
  )
}

export default MyButton
