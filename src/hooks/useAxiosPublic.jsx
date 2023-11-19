import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://192.168.1.5:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
