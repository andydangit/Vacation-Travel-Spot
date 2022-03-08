import React from "react";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#F55A5A",
    // height: "30px",
    margin: 0,
    textAlign: "center",
    padding: "20px",
    color: "#fff",
  };

  return (
    <div>
      <h1 className="container" style={navbarStyle}>
        Vacation Spots
      </h1>
    </div>
  );
}

export default Navbar;
