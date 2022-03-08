import React from 'react'

function Card(props) {

  const cardStyle = {
    padding: "25px",

    
  }

  const cardImgStyle = {
    width: "200px"
  }

  return (
    <div  style={cardStyle}>        
      <img src={props.imageUrl} className="imgLogo" style={cardImgStyle} alt = ""/>
      <p>Location: {props.location}  </p>
      <a href={props.googleMapsUrl}> View on Google map </a>
        <p>Title: {props.title} </p>
        <span> {props.startDate} - {props.endDate} </span> 
        <p> {props.description}</p>



    </div>
  )
}

export default Card