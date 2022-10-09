import React, { useState, useEffect } from "react";

function HookEffectsCounter() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('')
  useEffect(() => {
    console.log('useEffect - updateing document title')
    document.title = `you Clicked ${count} times`;
  });
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>Click{count}</button>
    </div>
  );
}

export default HookEffectsCounter;
