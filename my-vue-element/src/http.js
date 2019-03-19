import axios from 'axios'
import { Message, Loading } from 'element-ui'

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
    return Promise.reject(error)
  })
export default axios
