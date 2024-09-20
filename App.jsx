

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [decrementValue, setDecrementValue] = useState(1);

  console.log(count);

  const incrementer = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrementer = () => {
    setCount(count - decrementValue);
    console.log(count);
  };


  const handleDecrementValueChange = (e) => {
    setDecrementValue(parseInt(e.target.value));
  };


  return (
    <>
      <h1>Incrementer</h1>
      <p>count: {count}</p>
      <button onClick={incrementer}>Increment</button>
      <button onClick={decrementer}>Decrement</button>
      <input
        type="number"
        value={decrementValue}
        onChange={handleDecrementValueChange}
        placeholder="Decrement value"
      />
    </>
  );
}

export default App;