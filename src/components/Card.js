import React from 'react'

function Card(props) {
  return (
    <div>
        <p>Title: {props.title} </p>
        <p>Location: {props.location}  </p>
    </div>
  )
}

export default Card