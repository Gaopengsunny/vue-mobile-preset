module.exports = {
  publicPath: '/',
  assetsDir: 'assets',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/styles/variable.scss";@import "@/assets/styles/global.scss";'
      }
    }
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_APIURL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': 'api'
        }
      }
    }
  }
}
