import React from "react";

function Entry1(props) {
    console.log(props.imgURL);
  return (

    <div className="container">
      <div className="dog">
        <img src={props.imgURL} alt="" />
      </div>
      <div className="text">
        <h3 className="illh3">{props.description}</h3>
      </div>
    </div>
  );
}


export default Entry1;