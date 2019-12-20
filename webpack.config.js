const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const production = process.env.NODE_ENV === 'production' || false;

const banner = '';

module.exports = {
  entry: './src/verify.js',
  mode: 'production',
  output: {
    filename: production ? 'verify.min.js' : 'verify.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'verify',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            }
          }
        ] 
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 200, // 此处单位为字节 1MB=1024k 1k=1024字节
              name:'[name].[ext]',
              outputPath: 'img',
              publicPath: './'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: production,
    minimizer: [
      new UglifyJSPlugin({
        parallel: require('os').cpus().length,
        uglifyOptions: {
          ie8: false,
          keep_fnames: false,
          output: {
            beautify: false,
            comments: (node, { value, type }) => type == 'comment2' && value.startsWith('!')
          }
        }
      })
    ]
  },
  plugins: [new webpack.BannerPlugin({ banner })]
};
