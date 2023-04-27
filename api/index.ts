import { create } from "apisauce";

const api = create({
  baseURL: "http://192.168.0.193:3333", //"https://finuel-backend.onrender.com",
  headers: {
    Accept: "application/json",
  },
  timeout: 10000, // 10 seconds
  timeoutErrorMessage: "Request timed out",
});

const updateHeaders = (token: string) => {
  api.setHeader("Authorization", `Bearer ${token}`);
};

export default api;

export { updateHeaders };

`
use api like this


import api from "../api";

const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    return error;
  }
}
`;
