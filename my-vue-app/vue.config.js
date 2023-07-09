module.exports = {
  devServer: {
    port: 8081, // front end port
    proxy: {
      '/core/v1': {
        target: 'http://localhost:9090', // back-end url
        changeOrigin: true
      }
    }
  }
};
