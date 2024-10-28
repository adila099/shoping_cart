import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import ProductCard from "../componets/ProductCard";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addRequestSuccess, removeRequestSuccess } from "../redux/action/cartAction";

const BuyOnline = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  // useDispatch    => redux main data save krny k ly
  // useSelector    => redux sy any data get

  const addToCart = (id, title, price, img) => {
    dispatch(addRequestSuccess({ id, title, price, img, count: 1 }));
  };
  const removeToCart = (id) => {
    dispatch(removeRequestSuccess(id));
  };


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
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
