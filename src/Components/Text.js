import React from "react";
import "./Text.css";
function Text(props) {
  return (
    <div id="first">
     {< h2 style={{color:"rgb(76, 76, 151)"}}>helo</h2>}
        <h1 id="second" >See value from social sooner</h1>
  
      <p id="third" >
        Our training and strategic services have<br />
        helped thousands of organizations succeed on social
      </p>
      <button style={{padding:"10px",marginLeft:"40%",marginTop:"20px",backgroundColor:"green"}}>Request a domo</button>
      
    </div>
  );
}

export default Text;
