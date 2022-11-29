import React, { useRef } from "react";
import { useStackState } from "rooks";
import './App.css';
  
const Stack = () => {
    const numberToPushRef = useRef(0);
    const [list, { push, pop, peek, length }, 
        listInReverse] = useStackState([]);
  
const addToStack = () => {
        numberToPushRef.current = numberToPushRef.current + 1;
        push(numberToPushRef.current);
    }
  
    return (
        <div className="container">
        <h2>Stack</h2>
            <div className="stack">
                {listInReverse.map((item) => {
                    return <div className="stack-item"
                        key={item}>{item}
                        </div>
                })}
            </div>
            <div className="bottom-cont">
            <button onClick={addToStack}>Push</button>
            <button onClick={pop}>Pop</button>
                <hr />
            <p>Top Element : {peek()}</p> <p>Stack Size : {length}</p>
            </div>
  
    
        </div>
    );
}

export default Stack;