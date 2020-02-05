import React from "react";
export default function Header(props){

  var userName = "shailesh";

  

    return (
        <div style={{backgroundColor: "#000"}}>
    <span style={{color: "#fff", padding: '20px', display: 'block'}}>hello {props.portalName}</span>
    </div>
    )
    
    }