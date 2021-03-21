import axios from 'axios'
import QS from 'qs'
// import vue from 'vue'
// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'http://8.130.31.13:3001'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['token'] = localStorage.getItem('token')
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// let headers = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(
  config => {
    // const token = sessionStorage.getItem('token')
    // const token = localStorage.getItem('token')
    // token && (config.headers.token = token)
    return config
  },
  error => {
    return Promise.reject(error)
  })

axios.interceptors.response.use(
  config => {
    if (config.data.code === 200) {
      return config
    } else {
      reject(config)
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  })

export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
