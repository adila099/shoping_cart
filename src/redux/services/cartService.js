// userService.js
// import axios from "axios";

import API from "./base.service";

// login user
export const dataRequest = async () => {
  const response = await API.get(`/products`);
  return response;
};

export const productDelete = async (payload) => {
  const response = await API.delete(`/products/${payload}`);
  return response;
};
export const productUpdate = async (payload) => {
  const response = await API.put(`/products/${payload?.id}`, { title: payload?.editTitle, price: payload?.editPrice, description: payload?.editDescription });
  return response;
};
