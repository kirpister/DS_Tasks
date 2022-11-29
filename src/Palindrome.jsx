import React, { Component } from 'react';
import './App.css';

let word;

class Palindrome extends Component {
 
  state = {
    result: '',
  }

  render() {
    
  let inputHandler = (e) => {
      word = e.target.value;
    }

  let isPalindrome = () => {
      let reversedWord = word.split('').reverse();

      if (word.toLowerCase().trim() === reversedWord.join('').toLowerCase().trim())
      this.setState({ result: `Yaas, ${word} is a palindrome!` });

      else { 
      this.setState({ result: `Nahh, ${word} is not a palindrome.`});
      }
    };

  return (
      <div className='container'>
        
      <h2>Palindrome checker!</h2>

      <label htmlFor="word">Choose a word:</label> <br />
      <input id="word" type="text" onChange={inputHandler}></input> <br />
      <button onClick={isPalindrome}>CHECK!</button>
      

     <div>
        <p>Is this a palindrome?</p> <br />
        <br />
        <span>{this.state.result}</span>
      </div>
      

      </div>
    );
  }
}

export default Palindrome;