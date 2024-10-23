import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import ProductCard from "../componets/ProductCard";
import { Grid } from "@mui/material"; // Material-UI Grid for layout

const BuyOnline = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //   const productList = {
  //     title: "Cool Product",
  //     img: "https://via.placeholder.com/150", // Replace with a real image URL
  //     price: 49.99,
  //   };
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

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  console.log(cartCount, "jsjdhsjdh");
  return (
    <>
      <Nav cartCount={cartCount} />

      <Grid container spacing={2} padding={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              title={product.title}
              img={product.image}
              price={product.price}
              addToCart={addToCart}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BuyOnline;
