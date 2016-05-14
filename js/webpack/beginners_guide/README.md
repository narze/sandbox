# Beginner's Guide to Webpack

- `npm install -g webpack`
- `webpack ./app.js bundle.js` or just `webpack` after creating `webpack.config.js` correctly
- `open index.html`
- `webpack --watch` to watch file changes, or add `watch: true` to config

## webpack-dev-server
- `npm install webpack-dev-server -g`
- `webpack-dev-server`
- `open http://localhost:8080/webpack-dev-server/` and we got hot-loading!
- `webpack-dev-server --inline` & `open http://localhost:8080/` to get hot-loading w/o status bar

## Babel & JSHint loaders
- `npm init && npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack  --save-dev`
