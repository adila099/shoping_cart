import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import PageNotFound from "./pages/PageNotFound";
import Counter from "./pages/Counter";
import Cstate from "./componets/Cstate";
import Todo from "./pages/Todo";
import BuyOnline from "./pages/BuyOnline";
import Nav from "./pages/Nav";
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const total = test.reduce((acc, item) => acc + item.count, 0);
    setCartCount(total);
  }, [test]);

  const addToCart = (id, title, price, img) => {
    const unique = test?.find((item) => item?.id === id);
    if (unique) {
      setTest(
        test?.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setTest([...test, { id, title, price, img, count: 1 }]);
    }
  };

  const removeToCart = (id) => {
    const unique = test?.find((item) => item?.id === id);
    if (unique) {
      if (unique.count > 1) {
        setTest(
          test?.map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
          )
        );
      } else {
        setTest(test?.filter((item) => item.id !== id)); // Remove item if count is 1
      }
    } else {
      alert("Item not found in cart");
    }
  };

  return (
    <>
      <Router>
        <Nav cartCount={cartCount} test={test} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Cstate />} />
          <Route path="/todo" element={<Todo />} />
          <Route
            path="/buy"
            element={
              <BuyOnline addToCart={addToCart} removeToCart={removeToCart} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
