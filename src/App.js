import React from 'react';
import Prop from './prop.js';
import St from './st.js';


function App() {
  return (
    <div>
        <Prop lectureName="React lecture" topics="Dom, functional components and passing props"/>
        {/* <Prop topics="Dom, functional components and passing props"/> */}
        <St />
    </div>

  );
}

export default App;
