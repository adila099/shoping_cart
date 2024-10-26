import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import ProductCard from "../componets/ProductCard";
import { Grid } from "@mui/material";

const BuyOnline = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [test, setTest] = useState([]);


  useEffect(() => {
    const total = test.reduce((acc, item) => acc + item.count, 0);
    setCartCount(total);
  }, [test]);



  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);


  const addToCart = (id, title, price, img) => {
    const unique = test?.find((adila) => adila?.id === id);
    if (unique) {
      setTest(test?.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      setTest([...test, { id, title, price, img, count: 1 }]);
    }
  };

  const removeToCart = (id) => {
    const unique = test?.find((adila) => adila?.id === id);
    if (unique) {
      if (unique.count > 1) {
        setTest(test?.map(item =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        ));
      } else {
        setTest(test?.filter(item => item.id !== id));  // Remove item if count is 1
      }
    } else {
      alert('Item not found in cart');
    }
  };


  return (
    <>
      <Nav cartCount={cartCount} test={test} />

      <Grid container spacing={2} padding={2}>
        {products?.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              id={product?.id}
              title={product.title}
              img={product.image}
              price={product.price}
              addToCart={addToCart}
              removeToCart={removeToCart}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BuyOnline;
