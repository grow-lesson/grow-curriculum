module.exports = {
  publicPath: "/grow-curriculum/",
  outputDir: "docs",
  assetsDir: "",
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
