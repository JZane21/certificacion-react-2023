import axios from "axios";

// esta es nuestra llave, con la que nos conectamos a nuestro backend
// const BASE_URL:string = 'http://localhost:3000';//TODO: enviorment
const BASE_URL:string = import.meta.env.VITE_API_URL_LOCAL;

export const crmAPI = axios.create({
  baseURL: BASE_URL,
});

