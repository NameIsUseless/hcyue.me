var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    main: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/script/main'
    ],
    admin: "./src/script/admin"
  },
  output: {
    path: path.join(__dirname, 'public', 'script'),
    filename: '[name].js',
    publicPath: '/static/script/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      include: path.join(__dirname, 'src', 'script')
    }, {
      test: /\.js$/,
      loaders: ['babel?presets[]=es2015'],
      include: path.join(__dirname, 'src', 'script')
    }, {
      test: /\.sass$/,
      loaders: ["style", "css", "sass?indentedSyntax"],
      include: path.resolve(__dirname, "src/style")
    }, {
      test: /\.s?css$/,
      loaders: ["style", "css", "sass"],
      include: path.resolve(__dirname, "src/style")
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', ''],
    root: [
      path.resolve(__dirname, "src/style"),
      path.resolve(__dirname, "src/script")
    ]
  }
};