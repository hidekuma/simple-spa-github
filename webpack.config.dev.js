const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const repositroy = '/simple-spa-github';

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		vender: ['semantic-ui-react'],
		app: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: path.resolve(repositroy, 'dist')
	},
	module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
			{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions'
                    }
                  }
                }
              }
            }
          ]
        })
      }
    ]
  },
  //optimization: {
  //  splitChunks: {
  //    cacheGroups: {
  //      vendor: {
  //        chunks: 'initial',
  //        test: 'vendor',
  //        name: 'vendor',
  //        enforce: true
  //      }
  //    }
  //  }
  //},
	plugins: [
		new webpack.LoaderOptionsPlugin({
       // minimize: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			filename: path.resolve(__dirname, 'index.html'),
			alwaysWriteToDisk: true,
		}),
		new HtmlWebpackHarddiskPlugin()
	],
	devServer: {
			host: 'localhost',
			port: 3000,
			historyApiFallback: true,
	}
}
