import React, {Component} from 'react';
import './App.css';
import TextSizeValidation from "./TextSizeValidation/TextSizeValidation";
import TextCharacterDisplay from "./TextCharacterDisplay/TextCharacterDisplay";


class App extends Component{
  
  state = {
    inputName : "",
    inputLength : 0
  }

  nameChangeHandler = (event) => {
    const newName = event.target.value;
    const nameLength = newName.length;

    this.setState({
      inputName : newName,
      inputLength : nameLength
    });
  }

  deleteCharacterHandler = (index) => {
    const name_array = this.state.inputName.split('');
    name_array.splice(index,1);
    const newName = name_array.join("");
    const nameLength = newName.length;
    this.setState({
      inputName: newName,
      inputLength: nameLength
    });
  } 

  render(){
    const style = {
      margin : "15px 0px 0px 0px"
    }

    return(
      <div class="App">
        <input type="text" placeholder="Enter Name" onChange= {this.nameChangeHandler} value={this.state.inputName} style={style}/>
        <p> Input Size : {this.state.inputLength}</p>
        <TextSizeValidation length={this.state.inputLength} />
        {this.state.inputName.split("").map( (char, index) => {
          return <TextCharacterDisplay character={char} deleteChar={() => this.deleteCharacterHandler(index)}/>
        }
        )}
      </div>
    )
  }
}

export default App;
