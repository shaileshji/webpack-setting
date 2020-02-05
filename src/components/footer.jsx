import React from 'react';
export default class Footer extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "Ashish",
            age: 30,
            timerSecs: new Date().getSeconds()
        }
        setTimeout( () => {
            this.setState({name: "Shailesh"})
        },2000);

        setInterval( () => {
            this.setState({timerSecs:new Date().getSeconds() })
        },1000);

    }


    render(){
        return(
            <div className="footer p-2">
           <h2>Welcome  to {this.props.portalName} {this.state.name}</h2>
           <h3>TImer {this.state.timerSecs}</h3>
            
         </div>
        )

    }
    

}

export class NewComponent extends React.Component {

    render(){
        return(
            <h2>other component</h2>
        ) 
    }

}


