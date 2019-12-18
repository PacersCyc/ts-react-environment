const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')
const theme = require('../theme')

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
            options: {
              transpileOnly: true,
              useCache: true,
              cacheDirectory: path.join(__dirname, '../', '.cache-loader'),
              babelOptions: {
                // 不需要.babelrc文件
                babelrc: false,
                plugins: [
                  'react-hot-loader/babel'
                ]
              },
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryName: 'antd',
                    libraryDirectory: 'lib',
                    style: true
                  })
                ]
              })
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        // 只针对src下.scss文件编译
        include: [path.join(__dirname, '../', 'src')],
        use: [
          'style-loader',
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.join(__dirname, '../', '.cache-loader')
            }
          },
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
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: theme
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
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, '../', 'tsconfig.json')
      })
    ]
  }
}