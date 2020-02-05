import React from 'react';
export default class Atm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            amountVal : 0,
            
            remainders: 0,
            noteNum: {
                rs2000: 0,
                rs500: 0,
                rs100: 0,
                rs50: 0,
                rs20: 0,
                rs10: 0,
                rs5: 0,
                rs2: 0,
                rs1: 0
            },
            note: [
                {id: 2000, num: 0},
                {id: 500, num: 0},
                {id: 100, num: 0},
                {id: 50, num: 0},
                {id: 20, num: 0},
                {id: 10, num: 0},
                {id: 5, num: 0},
                {id: 2, num: 0},
                {id: 1, num: 0},
            ],
            arrayTest: [2000,500,100,50,20,10,2,1],
            notesArray: []
        };
        this.noteDisburse = this.noteDisburse.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkRange = this.checkRange.bind(this);
        this.checkRemainder = this.checkRemainder.bind(this);
    }    
    noteDisburse(){
        console.log(this.state.amountVal);
        let totalAmount = this.state.amountVal;
        for(var tt = 0; tt < this.state.arrayTest.length; tt++){
            var maxRange = tt == 0 ? 3000000 : this.state.arrayTest[tt-1] - 1;
            var chckRange = this.checkRange(totalAmount , this.state.arrayTest[tt] , maxRange);            
            console.log('test = ' +maxRange);
            if (chckRange) {
               //setTimeout(function(){
                this.state.notesArray.push(parseInt(totalAmount / this.state.arrayTest[tt]));
                //this.setState({noteNum : parseInt(totalAmount / this.state.arrayTest[tt])})
                console.log('dgdfh' + this.state.notesArray);
                return false;
                //},1000)
            }   
             
       } 
        
        let checkRangeAbove2000 = this.checkRange(totalAmount,2000,30000);
        let checkRangeAbove500 = this.checkRange(totalAmount,500,1999);
        let checkRangeAbove200 = this.checkRange(totalAmount,200,499);
        let checkRangeAbove100 = this.checkRange(totalAmount,100,199);
        let checkRangeAbove50 = this.checkRange(totalAmount,50,99);
        let checkRangeAbove20 = this.checkRange(totalAmount,20,49);
        let checkRangeAbove10 = this.checkRange(totalAmount,10,19);
        let checkRangeAbove5 = this.checkRange(totalAmount,5,9);
        let checkRangeAbove2 = this.checkRange(totalAmount,2,4);
        let checkRangeAbove1 = this.checkRange(totalAmount,1,1);
        console.log(checkRangeAbove2000);
        if(checkRangeAbove2000){
           var checkRemains = this.checkRemainder(totalAmount,2000);            
            this.setState({rs2000: parseInt(totalAmount/2000) });
        }
       setTimeout( () => {
        console.log(this.state.rs2000 + ' : ' + this.state.remainders);
       },200) 
    }
    checkRange(x, min, max){
        return x >= min && x <= max;
    }
    checkRemainder(divAmount, val){
        this.setState({remainders : divAmount % val})
    }
    handleChange(e){
        this.setState({amountVal: e.target.value}); 
    }
    render(){        
        let arrayItem = this.state.arrayTest.map((item) => {
            return(
            <li key={item}>{item}</li> 
            
            )
         })
        return(
            <div>
            <h1>ATM</h1>
            <input type="text" name="amountVal" value={this.state.amountVal} onChange={this.handleChange}/>
            <button onClick={this.noteDisburse}>Get Money</button>
            <div>
                <h2>test Array</h2>
                {this.state.arrayTest}
                <ul>
                   {arrayItem} 
                </ul>
            </div>
            <div className="row border">
                {this.state.note.map((item, key) =>
                    <li key={item.id}>{item.num}</li>
                )}
                <div className="col-6">Rs1: {this.state.rs1}</div>
                <div className="col-6">Rs2: {this.state.rs2}</div>
                <div className="col-6">Rs5: {this.state.rs5}</div>
                <div className="col-6">Rs10: {this.state.rs10}</div>
                <div className="col-6">Rs2000: {this.state.notesArray[0]}</div>
            </div>
         </div>
        )
    }
}