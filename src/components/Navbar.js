import React from "react";
import {GiGlobe} from 'react-icons/gi'

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#F55A5A",
    // height: "30px",
    margin: 0,
    textAlign: "center",
    padding: "15px",
    color: "#fff",
  };

  const mainLogo = { 
    height: "50px",
    width: "45px",
    paddingRight: "8px"
  }

  return (
    <div>
      <h1 className="container" style={navbarStyle}>
  <GiGlobe style={mainLogo} />  Vacation Spots
      </h1>
      
    </div>
  );
}

export default Navbar;
