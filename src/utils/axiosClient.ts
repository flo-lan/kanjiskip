import axios from 'axios'
import config from '../config/config'

const axiosClient = axios.create({
  baseURL: config.apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
export default axiosClient
