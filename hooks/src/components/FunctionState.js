import React, { useState } from 'react';

const FunctionState = () => {
  const [counter, setCounter] = useState(0);

  const addOneCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <div className="col">
      <h2>Un état.., une Function</h2>
      <p>Functionnel Component {counter}</p>
      <button className="btn btn-info mb-4" onClick={addOneCounter}>
        State function
      </button>
    </div>
  );
};

export default FunctionState;
