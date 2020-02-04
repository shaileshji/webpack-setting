
var webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            resolve: {
              extensions: [".js", ".jsx"]
            },
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
          },
          
          {
            test: /\.scss$/,
            use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'sass-loader'
                }
              ]
        }
          
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
      
      ],
    devServer: {
      contentBase: './dist'
    }
  };