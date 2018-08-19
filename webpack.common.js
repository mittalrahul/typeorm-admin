const path = require('path');
// const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const browsers = [
  '>1%',
  'last 4 versions',
  'Firefox ESR',
  'IE 10',
  'not ie < 9' // React doesn't support IE8 anyway
];

const extractScss = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

module.exports = env => ({
  entry: [
    './view/polyfills',
    './view/index'
  ],
  output: {
    path: path.resolve(__dirname, './dist/view'),
    publicPath: "<routePrefix>/static/",
    filename: `[name].${env ? "[chunkHash]" : "bundle"}.js`
  },
  module: {
    rules: [
      {
        test: /.(bmp|gif|jpe?g|png|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [
                [
                  'env',
                  {
                    modules: false,
                    targets: {
                      browsers
                    }
                  }
                ],
                'react'
              ],
              plugins: ['transform-object-rest-spread', 'transform-class-properties']
            }
          },
          // 'eslint-loader'
        ]
      },
      // {
      //   test: /\.(s*)css$/,
      //   exclude: [/styles\.scss$/, /node_modules/],
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         module: true,
      //         localIdentName: '[name]__[local]--[hash:base64:5]'
      //       }
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         plugins: () => [
      //           autoprefixer({
      //             browsers,
      //             flexbox: 'no-2009'
      //           })
      //         ]
      //       }
      //     },
      //     'sass-loader'
      //   ]
      // },
      // {
      //   test: /\.(s*)css$/,
      //   include: [path.resolve(__dirname, '../src/styles')],
      //   exclude: /node_modules/,
      //   use: extractScss.extract({
      //     use: [
      //       'css-loader',
      //       {
      //         loader: 'postcss-loader',
      //         options: {
      //           plugins: () => [
      //             autoprefixer({
      //               browsers,
      //               flexbox: 'no-2009'
      //             })
      //           ]
      //         }
      //       },
      //       'sass-loader'
      //     ],
      //     fallback: 'style-loader'
      //   })
      // }
    ]
  },
  plugins: [
    extractScss,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'view/index.html'
    }),
    // new CopyWebpackPlugin([
    //   {from: 'src/view/assets', to: 'assets'},
    //   {from: 'src/view/favicon.ico', to: ''}
    // ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module =>
        module.context && module.context.indexOf('node_modules') !== -1
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    modules: ['view', 'node_modules']
  }
});
