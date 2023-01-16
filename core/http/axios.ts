import axios from 'axios'

export const axiosInstance = axios.create(
  {
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json'
    },
    withCredentials: false
  }
)
