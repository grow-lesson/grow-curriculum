module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/grow-curriculum/' : '/',
  outputDir: "docs",
  assetsDir: "",
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
};
