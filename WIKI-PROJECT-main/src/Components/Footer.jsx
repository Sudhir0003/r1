import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const style = {
    color:'#454545',
    fontSize: 20
  };
  return (
     
    <footer>
      <p style={style}>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;