const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, '../', 'src/index.tsx')
  },
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'build/tpl/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}