const path = require('path');

module.exports = {
  /**
   * select file's entery directory "src" one by one
   * then direct to output directory "SEO-Analyst-build" one by one
  */
  entry: './src/service_worker.ts',
  // entry: './src/scripts/content_script.ts',
  // entry: './src/popup/popup.ts',
  // entry: './src/options/options.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'service_worker.js',
    path: path.resolve(__dirname, './SEO-Analyst-build'),

    // filename: 'content_script.js',
    // path: path.resolve(__dirname, './SEO-Analyst-build/scripts'),

    // filename: 'popup.js',
    // path: path.resolve(__dirname, './SEO-Analyst-build/popup'),

    // filename: 'options.js',
    // path: path.resolve(__dirname, './SEO-Analyst-build/options'),
  },
};