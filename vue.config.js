const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //transpileDependencies: true
  publicPath: process.env.NODE_ENV === 'production'
      ? '/myRoomRentWebVue/' // test20200915 為 repo 名稱
      : '/'
})
