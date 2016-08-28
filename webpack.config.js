var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/scripts/main.js'
  },
  output: {
    filename: './dist/scripts/[name].js'
  },
  devServer: {
    inline: true,
    port: 8008
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader?presets[]=es2015'
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/styles/style.css', {
      allChunks: true
    })
  ]
}
