const { defineConfig } = require('@vue/cli-service')
const path = require("path")

// 连接路径并返回
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@images': resolve('src/assets/images'),
        '@api': resolve('api'),
      }
    }
  }
})