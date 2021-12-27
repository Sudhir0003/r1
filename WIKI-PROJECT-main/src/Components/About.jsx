import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./About.css"
function namess(){
  alert("Hello")
}
function About() {
  return (
    

    <div className="imp">
      <Navbar fixed="top" />
      <div>
      <h1>
        <span>ABOUT US</span>
      </h1>
      <h3 className="abouth3">We are a group of people who came together with a motive and aim to help our impaired friends in achieving their goals and widen their knowledge spectrum with help of wikipedia we made supporting audio format</h3>
      <h2><span>OUR GOAL</span></h2>
      <h3 className="abouth3">To provide the immense knowledge of wikipedia to each and every person who are debarred from this knowledge otherwise</h3>
      <dl className="dictionary">
        {emojipedia.map(emojiTerm => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
      <Footer/>
      </div>      
    </div>
  );
}

export default About;