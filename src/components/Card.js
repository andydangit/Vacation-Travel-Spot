import React from 'react'

function Card(props) {
  return (
    <div>
        <p>Title: {props.title} </p>
        <p>Location: {props.location}  </p>
        <img src={props.imageUrl} />

    </div>
  )
}

export default Card