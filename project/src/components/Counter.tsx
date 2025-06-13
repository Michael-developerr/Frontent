import { useState } from "react";
import classes  from "./Counter.module.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClik = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button  onClick={handleClik}>increment</button>
    </div>
  );
};
