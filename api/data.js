// 接口请求文件
import axios from './axios'

// 接口调用
export const getMenu = (param) => {
  return axios.request({
    // 接口相关地址
    url: '/permission/getMenu',
    method: 'post',
    data: param
  })
}