import React from "react";
import Entry from "./Entry1";
import choices from "../choices";
import Navbar from "./Navbar";
import "./illustration.css"

function illustration(){
    return(
        <div className="imp">
          <Navbar/>
          <div>
        <h1><span>ILLUSTRATION</span></h1>
        <h2>Choose the picture you want to get description of and click on upload</h2>
        <div className="container1">
            <div style={{width: "40%"}}>
                <p><span>Photo</span></p> 
           </div>
           <div style={{width: "60%"}}>
              <p><span>DESCRIPTION GENERATED</span></p>
           </div>
        </div>
        <div className="dictionary">
        {choices.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            imgURL={emojiTerm.imgURL}
            description={emojiTerm.description}
          />
        ))}
      </div>
    </div>
        </div>
    );
}

export default illustration;