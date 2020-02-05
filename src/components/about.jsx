import React from "react";


export default class ShouldComponentUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            name: props.user.name,
            dataToMap: ["shailesh","shreyashi","test11"]
        }
        setTimeout( () => {
            this.setState({counter: this.state.counter + 10});
        }, 2000);
    }
   

    UpdateCounter = () => {
        this.setState({counter: this.state.counter + 1});

    }
    UpdateCounterCorrectly = () => {
        
    }

    render() {
        return (
            <div>
                <h1>Timer: {this.state.counter} {this.props.user.name}</h1>
                <ul>{this.state.dataToMap.map( (name) => {
                    return(
                    <li>{name}</li>
                    )
                })}</ul>
                <input type="button" value="Click To Update" onClick={this.UpdateCounterCorrectly} />
                <input type="button" value="Click To Update Correctly" onClick={this.UpdateCounter} />
            </div>
        )
    }
}