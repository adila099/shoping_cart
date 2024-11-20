export const BASE_URL_API = 'https://fakestoreapi.com';

console.log("BASE API ====", `${BASE_URL_API}`);


const baseConfig = {
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Expose-Headers": "Authtoken"
  },
};
export default baseConfig;
