import axios from 'axios'
import config from '../config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

// 定义axios工具类
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  // 定义axios的相关配置
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      header: {}
    }
    return config
  }

  // 拦截器
  interceptors(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      console.log('response: ', response);
      return response;
    }, function (error) {
      // 对响应错误做点什么
      console.log('error: ', error);
      return Promise.reject(error);
    });
  }

  // 接口请求调用函数
  request(options) {
    const instance = axios.create()
    // “...”将对象进行结构 (ES6扩展运算符)
    options = { ...this.getInsideConfig(), ...options }
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)