import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import ProductCard from "../componets/ProductCard";
import { Grid } from "@mui/material";

const BuyOnline = ({ addToCart, removeToCart }) => {
  const [products, setProducts] = useState([]);

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

  return (
    <>
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
