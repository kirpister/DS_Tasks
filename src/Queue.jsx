import React, { useRef } from "react";
import { useQueueState } from "rooks";
import './App.css';
  
const Queue = () => {

const numberToPushRef = useRef(0);
const [list, { enqueue, dequeue, peek, 
          length }] = useQueueState([]);
  
const addToQueue = () => {
    numberToPushRef.current = 
    numberToPushRef.current + 1;
        
    enqueue(numberToPushRef.current);
}

  return (
    <div className="container">
        <h2>Queue</h2>
        <div className="queue">
          {list.map((item) => {
          return <div className="queue-item"
          key={item}>{item}</div>})}
        </div>

        <div className="bottom-cont">
        <button onClick={addToQueue}>Enqueue</button>
        <button onClick={dequeue}>Dequeue</button>
          <hr />
        <p>Front Number: {peek()}</p>  <p>Queue Length: {length}</p>
        </div>
        </div>
    );
}

export default Queue;