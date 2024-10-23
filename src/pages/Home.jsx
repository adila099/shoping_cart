import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return(
    <>
    <Typography>Test</Typography>

    <Button onClick={()=>navigate('/todo')}>Todo</Button>
    <Button onClick={()=>navigate('/counter')}>Counter</Button>
    </>
  );
};

export default Home;

// smart ==> functionality |
//                         | ==>   max line of code ~= 400 to 500
// dump  ==> UI            |
