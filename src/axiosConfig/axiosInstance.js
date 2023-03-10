import axios from "axios";
const axiosinstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "054f08f272d82bf546575736c21dcbca",
  },
});

export default axiosinstance;
