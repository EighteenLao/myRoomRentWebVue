const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //transpileDependencies: true
  publicPath: process.env.NODE_ENV === 'production'
      ? '/myRoomRentWebVue/' // myRoomRentWebVue 為 repo 名稱
      : '/'
})
