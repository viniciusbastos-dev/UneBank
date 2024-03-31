import AsyncStorage from '@react-native-community/async-storage';
import axios, {AxiosInstance} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api-unebank.vercel.app',
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
