const { defineConfig } = require('@vue/cli-service');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const fs = require("fs");

module.exports = defineConfig({
  outputDir: 'dist',
  transpileDependencies: true,
  configureWebpack: config => {
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json'
      })
    )
  }
});
