// import { useState } from 'react'
// import './App.css'

// function App() {

//   let [counter, setCounter] = useState(0)

//   const updateValue = () => {
//     // counter = counter + 1
//     if (counter < 20) {
//       setCounter(counter + 1)
//     }
//   }

//   const deleteValue = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   }

//   return (
//     <>
//      <h1>Counter : {counter}</h1>
//      <button onClick={updateValue} style={{marginRight: '10px'}}>Add Value</button>
//      <button onClick={deleteValue}>Remove Value</button>
//     </>
//   )
// }

// export default App

import { useState, useRef } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrement = () => {
    setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
  };

  const startIncrement = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 100);
    }
  };

  const startDecrement = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
      }, 100);
    }
  };

  const stopPress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button 
        onClick={increment}
        onMouseDown={startIncrement} 
        onMouseUp={stopPress} 
        onMouseLeave={stopPress}
        style={{ marginRight: '10px' }}>
        Add Value
      </button>
      <button 
        onClick={decrement}
        onMouseDown={startDecrement} 
        onMouseUp={stopPress} 
        onMouseLeave={stopPress}>
        Remove Value
      </button>
    </>
  );
}

export default App;
