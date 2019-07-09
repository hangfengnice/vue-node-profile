import axios from "axios";
import store from "../store/index";

// 请求拦截
axios.interceptors.request.use(
  config => {
    store.dispatch("setLoading", true);
    if (localStorage.jwtToken) {
      config.headers.Authorization = localStorage.jwtToken;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    store.dispatch("setLoading", false);
    return response;
  },
  error => {
    store.dispatch("setLoading", false);
    // console.log(error.response.data)
    return Promise.reject(error)
  }
);

export default axios;
