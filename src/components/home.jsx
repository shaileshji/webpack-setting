import React, { Component } from 'react';
//import React from 'react';
import { connect } from 'react-redux';
import Mainbanner from './mainbanner';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        //this.state={inputfield: "no value"};   
        this.addItemeData = this.addItemeData.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.state = {
            items: [],
          };
      
        
        

       }
       componentWillMount(){
        //store.subscribe();
        store.subscribe(() => {
            // When state will be updated(in our case, when items will be fetched), 
            // we will update local component state and force component to rerender 
            // with new data.
      
            this.setState({
                items: store.getState().articles
            });
          });
       }
       componentWillUnmount(){
        store.subscribe(() => {
            // When state will be updated(in our case, when items will be fetched), 
            // we will update local component state and force component to rerender 
            // with new data.
      
            this.setState({
                items: [],
                [name]:''
            });
          });
       }

       addItemeData(){
        //console.log("trying to add picture url");
        //console.log("value of input field : "+this.state.inputfield);
        store.dispatch( addArticle({ id: this.state.itemId, title: this.state.itemDesc }) )
        
        console.log(store.getState())
       }
       deleteArticle(){
        //console.log("trying to add picture url");
       // console.log("value of input field : "+this.state.articleId);
       console.log(this.state)
       // return this.state.filter(({ id }) => id !== this.state.articleId);
       let stateVal = this.state;
       return Object.assign({}, stateVal, {
        items: [...stateVal.articles.filter(item => item.id !== action.item)],
      });

        
     
       }
     
       updateInputValue(evt){
         //console.log("input field updated with "+evt.target.value);
         //this.state={itemTitle: evt.target.value, itemId: evt.target.value};
         
         const target = evt.target;
         const value =  target.value;
         const name = target.name;
     
         this.setState({
           [name]: value
         });

        // this.state={inputfieldId: Number(evt.target.value)};
         
     
       }        
    render(){

       
        let itemList = store.getState().items.map(item=>{
            return(
                
                <div className="card col-4" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
                
            )
        })



        return(
            <div>
                <Mainbanner />
            <div className="main-content m-3">
            <h3 className="center">Our items</h3>
                <div className="box row">
                    {itemList}
                </div>


            <input type="text" id="itemId" name="itemId" placeholder="Enter item id"  onChange={this.updateInputValue} />
            <input type="text" id="itemDesc" name="itemDesc" placeholder="Enter item desc"  onChange={this.updateInputValue} />
            <button onClick={this.addItemeData}>add item</button><br /><br />



            
            <input type="text" id="itemTitle" placeholder="Enter item id"  onChange={this.updateInputValue} />
            <button onClick={this.deleteArticle}>delete article</button>
            
(
            <div id="itemList">
                
            <header><h2 className="mt-4">item List</h2></header>
                <ul>
                    {store.getState().items.map((item) => <li key={item.id}>id: {item.id} - {item.title} </li> )}
        
                </ul>
            </div>
            
            <br /><br />
            </div>
         </div>
        )

    }

}



