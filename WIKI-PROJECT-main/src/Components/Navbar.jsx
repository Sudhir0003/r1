import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return (
            <div className='navbar'>
                <img id = 'logo' src = './logo.jpeg' alt = ''></img>
                <a className="navbar-brand" id='WIKI_HEADING'>WIKI</a>
                <Link  id= 'about_button' to="/about">ABOUT</Link>
                <Link  id = 'illustration_button' to="/illustration">ILLUSTRATION</Link>
                <Link  id = 'upload_button' to="/upload">UPLOAD</Link>
                <Link id = 'login_button' to="/login">LOGIN</Link>
            </div>
        );
    }
}

export default Navbar;