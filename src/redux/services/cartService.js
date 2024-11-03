// userService.js
// import axios from "axios";

import API from "./base.service";

// login user
export const dataRequest = async () => {
  const response = await API.get(`/products`);
  return response;
};

export const productDelete = async () => {
  const response = await API.delete(`/products/{id}`);
  return response;
};
export const productUpdate = async () => {
    const response = await API.put(`/products/{id}`);
    return response;
  };
