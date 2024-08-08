const { defineConfig } = require('@vue/cli-service');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const fs = require("fs");

module.exports = defineConfig({
  outputDir: '/home/t/teleklass/msu-russia.ru/public_html',
  transpileDependencies: true,
  configureWebpack: config => {
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json'
      })
    )
  }
});
