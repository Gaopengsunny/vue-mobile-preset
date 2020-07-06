import axios from 'axios'

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : process.env.VUE_APP_APIURL
})

// 请求拦截器
http.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截器
http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
  }
)

export const get = (url, params = {}) => http.get(url, { params })
export const post = http.post
export const deleted = (url, params = {}) => http.delete(url, { params })
export const put = http.put

