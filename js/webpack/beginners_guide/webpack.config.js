module.exports = {
  entry: ['./global.js', './app.js'],
  output: {
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        exclude: /bundle\.js$/
      }
    ],
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
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
  }
}
