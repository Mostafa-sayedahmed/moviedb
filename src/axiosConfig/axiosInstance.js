import axios from "axios";
import { changeLoader } from "../store/action";
import store from "./../store/store";
const axiosinstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "054f08f272d82bf546575736c21dcbca",
  },
});
axiosinstance.interceptors.request.use(
  function (config) {
    setTimeout(
      function () {
        store.dispatch(changeLoader(true));
      },
      [1000]
    );
    return config;
  },
  function (err) {
    console.log(err);
    return Promise.reject(err);
  }
);
axiosinstance.interceptors.response.use(
  function (res) {
    console.log(res);
    // store.dispatch(changeLoader(false));
    setTimeout(
      function () {
        store.dispatch(changeLoader(false));
      },
      [1000]
    );
    return res;
  },
  function (err) {
    console.log(err);
    return Promise.reject(err);
  }
);

export default axiosinstance;
