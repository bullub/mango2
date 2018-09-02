module.exports = {
  plugins: [
    require('autoprefixer')({
      // 不移除属性，例如： -webpack-box-orient
      remove: false
    })
  ]
}