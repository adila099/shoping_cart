// userService.js
import API from './base.service';


// login user
export const loginUser = async (payload) => {   // /auth
  const response = await API.post(`/test`, payload);  // /keystone/api/session/signin  (/api/user/auth)
  return response;
};
