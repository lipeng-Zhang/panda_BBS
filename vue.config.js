const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }, 
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('plugins', resolve('src/plugins'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('api', resolve('src/api'))
  },
  configureWebpack: {
    devtool: 'source-map'
  },

  devServer: {
    proxy: {
      '': {
        target: 'http://localhost:3001',
        // target: 'http://139.196.203.58:3001',
        ws: true,
        changeOrigin: true
      }
    }
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '/'
};
