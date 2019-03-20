import axios from 'axios'
import { Message, Loading } from 'element-ui'
import router from './router/index'

let loading
function startLoading () {
  loading = Loading.service({
    lock: true,
    text: '拼命加载中……',
    background: 'rgb(0,0,0,0.5)'
  })
}
function endLoading () {
  loading.close()
}

axios.interceptors.request.use(config => {
//  加载动画
  startLoading()
  if (localStorage.eleToken) {
    config.headers.Authorization = localStorage.eleToken
  }
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(
  response => {
    endLoading()
    return response
  }, error => {
    endLoading()
    Message.error(error.response.data())
    const status = error.response
    // eslint-disable-next-line
    if (status == 401) {
      Message.error('token失效，请重新登陆')
      localStorage.removeItem('eleToken')
      router.push('/login')
    }
    return Promise.reject(error)
  })
export default axios
