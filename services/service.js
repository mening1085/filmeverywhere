import axios from 'axios'
import { domain } from './constants'

const http = new axios.create({
  baseURL: domain,
})

http.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.data.statusCode === 401) {
      window.localStorage.removeItem('vuex')
      return Promise.reject(err)
    } else {
      return Promise.reject(err)
    }
  }
)

const httpMethod = {
  get(url, options = null) {
    return http.get(url, options).then((res) => res.data)
  },
  post(url, data = null, options = null) {
    return http.post(url, data, options).then((res) => res.data)
  },
  put(url, data = null, options = null) {
    return http.put(url, data, options).then((res) => res.data)
  },
  delete(url, options = null) {
    return http.delete(url, options).then((res) => res.data)
  },
}

export default httpMethod
