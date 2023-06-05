import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: "http://localhost:3000",
    responseType: "json",
    headers: { "Accept" : "application/json" },
  });
};
