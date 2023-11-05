import React, { useState } from "react";
 export default function App() {
    const [count, setCount]=useState(0);
    function increment (){
        setCount(function (prevCount){
            return (prevCount += 1);
        });
    }
    function decrement (){
        setCount(function (prevCount){
            if(prevCount > 0){
                return (prevCount -= 1);
            }
            else{
                return (prevCount = 0);
            }
        });
    }
    return (
        <div className="App">
            <h1> {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
    
    }
    
