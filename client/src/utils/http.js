import axios from 'axios'

axios.interceptors.request.use(config => {
  if(localStorage.jwtToken){
    config.headers.Authorization = localStorage.jwtToken
  }
  return config
})

export default axios