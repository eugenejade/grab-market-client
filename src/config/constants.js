//export const API_URL = "http://localhost:8080";
export const API_URL = process.env.NODE_ENV
  ? "https://grab-market-server-eugene.herokuapp.com/"
  : "http://localhost:8080";
