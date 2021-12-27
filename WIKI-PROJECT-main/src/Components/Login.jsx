import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import "./Login.css"
import { Link } from "react-router-dom";

function Login() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    password:""
  });
  

  useEffect(()=>{
    fetch('/app').then(response=>{
      if(response.ok)
      {
        return response.json()
      }
    }).then(data=>console.log(data))
  },[])

  /*
  const handleformsumbit= ()=>{
    fetch("/app/create",{
      method:'POST',
      body: JSON.stringify(
        {
          firstname:contact.fName,
          lastname:contact.lName,
          email:contact.email,
          password:contact.password
        }
      ),
      headers:{
        "content-type":"application/json"
      }
      
    }).then(response=>response.json())
     .then(message=>console.log(message))
  }
  */
  
  const handleformsumbit = async()=>{
      if(contact.fName.length===0)
      {
        alert("Please Enter First Name");
        return;

      }  
      if(contact.lName.length===0)
      {
        alert("Please Enter Last Name");
        return;

      }  
      if(contact.email.length===0)
      {
        alert("Please Enter Email ");
        return;

      }  
      if(contact.password.length===0)
      {
        alert("Please Enter Password");
        return;

      }  
      const response= await fetch("/app/create" ,{
        method:'POST',
        body: JSON.stringify(
          {
            firstname:contact.fName,
            lastname:contact.lName,
            email:contact.email,
            password:contact.password
          }
        ),
        headers:{
          "content-type":"application/json"
        }
      });

      const data= await response.json();
      console.log(data['201']);
      
      if(response.ok)
      {
        console.log("response worked");
      }

  }

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          password :prevValue.password
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          password :prevValue.password
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          password :prevValue.password
        }
      }
        else if(name==="password")
        {
          return{
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          password :value
        }
      };
    });
  }
  let vari="/Login";
  if(contact.fName.length>0 && contact.lName.length>0 && contact.email.length>0 && contact.password.length>0) vari="/About";
  return (
    <div>
      <Navbar/>
      <div className="container3">
      <p className="loginh1"><span>LOGIN</span></p>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      {/* <p>{contact.email}</p>  */}
      <form onSubmit={handleformsumbit}>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          type="password"
          value={contact.password}
          name="password"
          placeholder="Enter password"
        />
      </form>
      <Link onClick={handleformsumbit} id ='new' to={vari}>Submit</Link>
    </div>
    </div>
  );
}

export default Login;
