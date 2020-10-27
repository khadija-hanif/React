import React,{useState} from 'react';


export default function St() {
    let {count, setCount} = useState(1);

    return (
        <div>
            <h3>Value of counter variable is: {count} </h3>
            <br />
            <button onClick={
            ()=> setCount(count + 1)
            }>
                Update Counter
            </button>
            
         </div>
    );
}

