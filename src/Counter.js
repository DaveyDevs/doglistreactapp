import React, { useState } from "react";

export function Counter({ name = "world" }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("peas");

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div></div>
      <input
        onChange={(e) => {
          if (!e.target.value.includes("poop")) {
            setInputValue(e.target.value);
          }
        }}
        value={inputValue}
      />

      <p>{inputValue}</p>
    </div>
  );
}
