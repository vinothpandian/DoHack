const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('./package.json');
var webpack = require('webpack');

module.exports = {
    entry: {
      app:  './app/javascripts/app.js',
      reader:  './app/javascripts/reader.js',
      vendor: Object.keys(package.dependencies),
      prescription: './app/javascripts/prescription.js',
      viewData: './app/javascripts/viewData.js',
      registration: './app/javascripts/registration.js',
      scanPatient: './app/javascripts/scanPatient.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        host: '127.0.0.1',
        port: 8000,
        disableHostCheck: false,
    },
    node: {
      fs: 'empty'
    },
    plugins: [
        new HtmlWebpackPlugin({// Use template of our app's app.html and generate new app.html in the build folder.
            hash: true,
            title: 'QR generator',
            template: './app/index.html',
            chunks: ['app','vendor'],
            filename: './app.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({// Use template of our app's index.html and generate new index.html in the build folder.
            hash: true,
            title: 'QR reader',
            template: './app/reader.html',
            chunks: ['reader'],
            filename: './reader.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({// Use template of our app's index.html and generate new index.html in the build folder.
            hash: true,
            template: './app/prescription.html',
            chunks: ['prescription'],
            filename: './prescription.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({// Use template of our app's index.html and generate new index.html in the build folder.
            hash: true,
            template: './app/scanPatient.html',
            chunks: ['scanPatient'],
            filename: './scanPatient.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({// Use template of our app's index.html and generate new index.html in the build folder.
            hash: true,
            template: './app/registration.html',
            chunks: ['registration'],
            filename: './registration.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({// Use template of our app's index.html and generate new index.html in the build folder.
            hash: true,
            template: './app/viewData.html',
            chunks: ['viewData'],
            filename: './viewData.html' //relative to root of the application
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default'],
        })
    ],
    module: {
        rules : [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['react','es2015']
              }
            }
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                }
            }]
          },
          {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
            // loader: "url?limit=10000"
            use: "url-loader"
          },
          {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            use: 'file-loader'
          },
        ],
    }
};
