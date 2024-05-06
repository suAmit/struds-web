const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.ts',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  externals: [nodeExternals()],
};
