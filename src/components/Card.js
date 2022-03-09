import React from 'react'

import {GrMapLocation} from 'react-icons/gr'

function Card(props) {

  const cardStyle = {
    padding: "25px",   
  }

  const cardImgStyle = {
    width: "400px",
    height: "300px",
    paddingLeft: "40px"
  }

  const column = {
    display: "flex",
    flexDirection: "column",
    flexBasis: "40%",
    flex: 1,
    
  }

  const cardRow ={
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "50%",
    
  }

  return (
    <div  style={cardStyle}>   
    <div style={cardRow}>     
      <div style={column}> 
        <img src={props.imageUrl} className="imgLogo" style={cardImgStyle} alt = ""/>
        </div> 

        <div style ={column}> 
      <div> <GrMapLocation /> <strong>  {props.location} </strong> 
      <a href={props.googleMapsUrl}> View on Google map </a> 
      </div>
      
        <h2>{props.title} </h2>
        <span> {props.startDate} - {props.endDate} </span> 
        <p> {props.description}</p>
    </div> 

</div> 
    </div>
  )
}

export default Card