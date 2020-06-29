const createExpoWebpackConfigAsync = require('@expo/webpack-config')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      offline: false,
      optimization: {
        ...env.optimization,
        minimize: true,
      },
      babel: {
        dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components'],
      },
      performance: {
        hints: false,
      },
    },
    argv
  )
  // config.plugins.push(
  //   new BundleAnalyzerPlugin({
  //     path: 'web-report',
  //   })
  // );
  return config
}
