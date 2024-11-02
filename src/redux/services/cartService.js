// userService.js
import axios from 'axios';
import API from './base.service';


// login user
export const dataRequest = async () => {
    const response = await API.get(`/products`);
    return response;
};
