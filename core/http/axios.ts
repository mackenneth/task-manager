import axios from 'axios'

export const axiosInstance = axios.create(
  {
    baseURL: process.env.FAKE_API_URL,
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json'
    },
    withCredentials: false
  }
)
