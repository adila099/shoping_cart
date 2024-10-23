import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import PageNotFound from "./pages/PageNotFound";
import Counter from "./pages/Counter";
import Cstate from "./componets/Cstate";
import Todo from "./pages/Todo";
import BuyOnline from "./pages/BuyOnline";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Cstate />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/buy" element={<BuyOnline />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
