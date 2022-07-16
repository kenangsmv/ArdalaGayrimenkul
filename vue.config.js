module.exports = {
  pluginOptions: {
    i18n: {
      locale: "y",
      fallbackLocale: "y",
      localeDir: "y",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
};
