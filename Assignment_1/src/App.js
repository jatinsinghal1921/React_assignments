import React, {Component} from 'react';
import UserOutput from './userOutput/userOutput';
import UserInput from './userInput/userInput';
import './App.css';

class App extends Component{
  
  state = {
    users : [
      {name : "Shubham Singhal"},
      {name : "Jatin"}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      users: [
        { name: "Shubham Singhal" },
        { name: event.target.value }
      ]
    })
  }

  render()
  {

    const style = {
      margin: "15px 5px 5px 15px"
    }

    return(
      <div>
        <h1 style={style}>Assignment 1</h1>
        <UserOutput username={this.state.users[0].name}/>

        <UserOutput username={this.state.users[1].name}/>
        <UserInput changeName={this.nameChangeHandler} username={this.state.users[1].name}/>
      </div>
    )
  }
}

export default App;
