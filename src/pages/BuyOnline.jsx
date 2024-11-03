import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import ProductCard from "../componets/ProductCard";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addRequestSuccess,
  dataRequest,
  removeRequestSuccess,
  deleteProductRequest,
} from "../redux/action/cartAction";

const BuyOnline = () => {
  const dispatch = useDispatch();
  const { shop } = useSelector((state) => state.cart);

  const handleDelete = (productId) => {
    console.log(productId, "wwee");
    dispatch(deleteProductRequest(productId));
  };

  // useDispatch    => redux main data save krny k ly
  // useSelector    => redux sy any data get

  const addToCart = (id, title, price, img) => {
    dispatch(addRequestSuccess({ id, title, price, img, count: 1 }));
  };
  const removeToCart = (id) => {
    dispatch(removeRequestSuccess(id));
  };

  const edit = (id) => {
    const data = shop?.find((item) => item?.id == id);
    console.log("🚀 ~ edit ~ id:", data);
  };

  useEffect(() => {
    // if (!shop?.length) {
    dispatch(dataRequest());
    // }
  }, []);

  return (
    <>
      <Grid container spacing={2} padding={2}>
        {shop?.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              id={product?.id}
              title={product.title}
              img={product.image}
              price={product.price}
              description={product.description}
              addToCart={addToCart}
              removeToCart={removeToCart}
              edit={edit}
              handleDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BuyOnline;
