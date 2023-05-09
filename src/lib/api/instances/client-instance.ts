import axios from "axios";

export function client() {
  const instance = axios.create({
    baseURL: process.env.CLIENT_API
  });

  return instance;
}
