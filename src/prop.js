import React from 'react';

function Prop(props) {
    return (
        <div>
            <h1>Today is my first {props.lectureName}</h1>
            <hr />
            <h3><p>In this lecture, i have learnt about {props.topics}</p></h3>
        
        </div>
    );
}
export default Prop;