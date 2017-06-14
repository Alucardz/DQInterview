const webpackConfig = require('./node_modules/@ionic/app-scripts/config/webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

webpackConfig.plugins.push(new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  generateStatsFile: true,
  
}))
