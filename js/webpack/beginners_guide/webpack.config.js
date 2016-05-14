module.exports = {
  entry: ['./global.js', './app.js'],
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  watch: true
}
