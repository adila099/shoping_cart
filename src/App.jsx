import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import PageNotFound from "./pages/PageNotFound";
import Cstate from "./componets/Cstate";
import Todo from "./pages/Todo";
import BuyOnline from "./pages/BuyOnline";
import Nav from "./pages/Nav";
function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Cstate />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/buy" element={<BuyOnline />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
