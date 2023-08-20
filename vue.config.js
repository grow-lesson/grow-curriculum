module.exports = {
  // publicPath: "/grow-curriculum/",
  publicPath: "/",
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
  },
  // API ベースURLを設定
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_API_URL: JSON.stringify(process.env.VUE_APP_API_URL)
        }
      })
    ]
  }
};
