import React, { useState } from "react";
import Counter from "../pages/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addCountSuccess, clearCountSuccess, removeCountSuccess } from "../redux/action/countAction";

const Cstate = () => {
  const dispatch = useDispatch();
  const { totalCount } = useSelector((state) => state.counter)

  const handlePlus = () => {
    dispatch(addCountSuccess(1));
  };


  const handleMinus = () => {
    if (totalCount > 0) {
      dispatch(removeCountSuccess());
    }
  };

  const reset = () => {
    dispatch(clearCountSuccess());
  }
  return (
    <div>
      <Counter minus={handleMinus} plus={handlePlus} counter={totalCount} reset={reset} />
    </div>
  );
};

export default Cstate;
