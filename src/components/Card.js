import React from 'react'

function Card(props) {
  return (
    <div>        
      <img src={props.imageUrl} className="imgLogo" width="150px" alt = ""/>
      <p>Location: {props.location}  </p>
      <a href={props.googleMapsUrl}> View on Google map </a>
        <p>Title: {props.title} </p>
        <span> {props.startDate} - {props.endDate} </span> 
        <p> {props.description}</p>



    </div>
  )
}

export default Card