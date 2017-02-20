import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

// jsというタスクの定義
const js = {
  entry: {
    // どのjsを読み込むかの宣言で今回はmain.js
    module: `${__dirname}/src/js/main.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          // 自動修正させる
          fix: true,
          // eslintでエラーが出たらビルドを中断する
          failOnError: true,
        },
      },
    ],
  },
  plugins: [
    // 圧縮
    new webpack.optimize.UglifyJsPlugin(),
    // 通知
    new WebpackNotifierPlugin(),
  ],
};

// webpackはjsというタスクを実行
module.exports = [js];
