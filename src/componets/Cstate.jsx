import React, { useState } from "react";
import Counter from "../pages/Counter";

const Cstate = () => {
  const [counter, setCounter] = useState(0);
  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () =>{
    setCounter(0)
  }
  return (
    <div>
      <Counter minus={handleMinus} plus={handlePlus} counter={counter} reset = {reset}/>
    </div>
  );
};

export default Cstate;
