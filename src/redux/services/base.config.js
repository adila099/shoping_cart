export const BASE_URL_API = 'https://6710c852a85f4164ef2f4661.mockapi.io/sapphire';

console.log("BASE API ====", `${BASE_URL_API}`);


const baseConfig = {
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Expose-Headers": "Authtoken"
  },
};
export default baseConfig;
