import React from 'react'

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
      <p>Location: {props.location}  </p>
      <a href={props.googleMapsUrl}> View on Google map </a>
        <p>Title: {props.title} </p>
        <span> {props.startDate} - {props.endDate} </span> 
        <p> {props.description}</p>
    </div> 

</div> 
    </div>
  )
}

export default Card