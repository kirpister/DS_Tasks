import React, { Component } from 'react';
import './App.css';

let ogText;

class Bubble extends Component {

  state = {
    ogText: '',
    result: '',
  }

  render() {

  let  bubbleSorter = (input) => {
      let inputLen = input.length;
      for (let i = 0; i < inputLen; i++) {
        for (let j = 0; j < inputLen; j++) {
          if (input[j] > input[j + 1]) {
            let temp = input[j];
            input[j] = input[j + 1];
            input[j + 1] = temp;
          }
        }
      }
      return input;
    };
  
  const inputHandler = (e) => {
      this.setState({ ogText: e.target.value.split(',').map((el) => Number(el))});
      console.log(ogText)
    }
    
  
  const sortHandler = () => {
      this.setState({ ogText: bubbleSorter(this.state.ogText) });
      this.setState({ result: this.state.ogText.join(', ') });
    }

  const resetHandler = () => {
    window.location.reload();
  } 

    return (

      <div className='container'>

        <h2>&#129767; BubbleSorter!	&#129767;</h2>
        <p>Sort out your list of numbers here!</p>

        <input type="text" placeholder='13,7,27' onChange={inputHandler} /> <br />
        <button onClick={sortHandler}>BUBBLE IT!</button> <button onClick={resetHandler}>RESET</button>
        
        
        <div className='result'>
        <p>{this.state.result}</p>
        </div>
        
      </div>
    );
  }
}

export default Bubble;