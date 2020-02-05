import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Header from "./components/header";
import Footer, {NewComponent} from "./components/footer";
import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";

var userName = 'Shailesh';
var portalName = "CheapOair";

function App(){
  var user = {name: 'shailesh user', age: 30}
  return(
  <div>
  <Header />
    <Timer />
    <About user={user}/>
    <Footer portalName={portalName} />
    <NewComponent />
    <Contact />
    </div>
    )
}

function Timer(){
  return(
    <>
    <h1 name="heading11">TImer: {new Date().getSeconds()}</h1>
    <h2 name="heading12">dfds</h2>
    </>
  )
}


ReactDOM.render(<App portalName={portalName} />, document.getElementById('app'));

