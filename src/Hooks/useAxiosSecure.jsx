import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8955",
  // baseURL:"https://gg-gadgets-server.vercel.app"
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
