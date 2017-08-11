import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputName:'',
    inputRound:0,
    clicked: false,
    clicked2: false,
    outputGrade: 0,
    true:' มากกว่า 50',
    false:' น้อยกว่า 50'

  }
  
  
  onClickName = () => {
    this.setState({
      clicked:true
    })
  }
  
  onChangeName = (e) => {
    this.setState({
      inputName: e.target.value
    })
  }
  
  onChangeRound = (e) => {
    this.setState({
      inputRound: parseInt( e.target.value )
    })
  }

  onClickDelete = (e) => {
    this.setState({
      inputRound: this.state.inputRound-1
    })
  }
  
 
 ClickGrade = () => {
    this.setState({
      clicked2:true
    })
  }
  inputGrade = (e) => {
    this.setState({
      outputGrade: parseInt(e.target.value)
    })
  }
  

  render() {
    let x = []
    for(var i=0;i<this.state.inputRound;i++) {
      x.push(
        <span key={i}>{this.state.inputName} 
        <button onClick={this.onClickDelete}>delete</button><br/></span>
      )
    }
//     for(var i = array.length - 1; i >= 0; i--) {
//     if(array[i] === number) {
//        array.splice(i, 1);
//     }
// } 
    return (
        <div>
            &nbsp; Name &nbsp;<input onChange={this.onChangeName} />&nbsp;
            &nbsp; Round &nbsp;<input onChange={this.onChangeRound} /> &nbsp;
            <button onClick={this.onClickName}>ok</button>
            <br/>
         {
            this.state.clicked == true ? 
            x: null
         }
                     <br/><br/>
            &nbsp; เกรด&nbsp;<input type="number" onChange={this.inputGrade}/>&nbsp;
            <button onClick={this.ClickGrade}>ok</button>
            <br/>
         {
            this.state.clicked2 == true ? 
            this.state.outputGrade > 50 ?
            this.state.true: this.state.false
            :null
         }
       </div>
    );
  }
}

export default App;
