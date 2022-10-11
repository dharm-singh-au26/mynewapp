import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

function C1() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <>
      <h2> Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default C1;
