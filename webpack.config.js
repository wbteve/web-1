var path = require('path');
var webpack = require('webpack');
var outputDir = path.join(__dirname, 'builds') 
module.exports = {
  entry: './src/main.tsx',
  devtool: "source-map",
  output: { path: outputDir, filename: 'bundle.js' },
  stats: {
    colors: false,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  plugins:[
      new webpack.ProvidePlugin({   
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery'
      })
  ],
  module: {
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ],
    loaders: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
