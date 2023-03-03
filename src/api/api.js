import axios from "axios";

const apiURL = {
  development: "http://localhost:4000",
  production: "LINK DA SUA API DEPLOYADA!",
};

const api = axios.create({ baseURL: apiURL[process.env.NODE_ENV] });

api.interceptors.request.use((config) => {
  const loggedInUser = localStorage.getItem("loggedInUser");

  const parsedLoggedInUser = JSON.parse(loggedInUser || '""');

  if (parsedLoggedInUser.token) {
    config.headers = { Authorization: `Bearer ${parsedLoggedInUser.token}` };
  }

  return config;
});

export { api };
