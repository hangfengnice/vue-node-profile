import axios from 'axios'
import store from '../store/index'

axios.interceptors.request.use(config => {
  store.dispatch('setLoading', true)
  if(localStorage.jwtToken){
    config.headers.Authorization = localStorage.jwtToken
  }
  return config
})

axios.interceptors.response.use(response => {
  store.dispatch('setLoading', false)
  return response
},error => {
  store.dispatch('setLoading', false)

})

export default axios