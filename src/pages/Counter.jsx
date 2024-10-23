import { Button } from "@mui/material";
import React from "react";

const Counter = ({ minus, plus, counter, reset }) => {
  return (
    <div>
      <Button title="Minus" onClick={minus}>
        Minus
      </Button>
      <span style={{ margin: "10px", color: "black" }}>{counter}</span>
      <Button title="Plus" onClick={plus}>
        {" "}
        Plus{" "}
      </Button>{" "}

      <Button title="Reset" onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;
