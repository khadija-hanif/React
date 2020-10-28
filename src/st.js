import React,{useState} from 'react';
import Message from './message.js';
import App from './App.css';
/*
export default function St() {
    const [count, setCount] = useState(1);
        return (
        <div>
            /* <h3>Value of counter variable is : {count}</h3> */

/*
            <button onClick={
            ()=> setCount (count + 1)
            }>
                Update Counter
            </button> 
            <Message counter={count}/>
         </div>
    );
}
*/
export default function St() {
    const [isMorning, setMorning] = useState(true);

    return (
        <div className={`box ${isMorning ?  'dayLight': '!isMorning'}`}>
            <h2>Have a good {isMorning? 'Morning' : 'Night'}</h2>
            <button onClick={
            ()=> setMorning (!isMorning)
            }>
                Update Day
            </button>
            
            {/* <Message counter={count}/> */}
            {/* <Message ismorning={isMorning}/> */}
         </div>
    );
}