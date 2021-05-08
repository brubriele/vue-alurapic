module.exports = {
  publicPath: '/project name/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      // load which style file you want to import globally
      patterns: [path.resolve(__dirname, './src/styles/_variables.scss')],
    },
  }
}
