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
          // typings-for-css-modules-loader作者不再维护, 采用其他开发者fork版本 关于css-loader依赖问题issue详情见https://github.com/Jimdo/typings-for-css-modules-loader/issues/94
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              // 使用css-module
              modules: true,
              // esModule: true,
              localsConvention: 'camelCase'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.join(__dirname, '../', 'src/styles')]
              }
            }
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