import React from "react";
import "./Nav.css"
function Navbar(props){
    return(
        <div id="container">
            <div id="one">Hootsuite</div>
            <div id="two">
                <a href="#">Platform</a>
                <a href="#">plans</a>
                <a href="#">Enterprises</a>
                <a href="#">Resources</a>
                <a href="#">Education </a>
            </div>
            <div id="three">
                <p style={{marginRight:"13px"}}>Contact us</p>
                <p style={{marginRight:"13px"}}>log in</p>
               <button>Signup</button>
            </div>
        </div>
    );
}
export default Navbar;