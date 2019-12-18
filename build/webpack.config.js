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
      },
      {
        test: /\.scss$/,
        // 只针对src下.scss文件编译
        include: [path.join(__dirname, '../', 'src')],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
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