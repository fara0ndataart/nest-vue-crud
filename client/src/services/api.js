import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`,
    responseType: "json",
    headers: { "Accept" : "application/json" },
  });
};
