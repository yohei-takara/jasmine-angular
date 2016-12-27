// Karma configuration
// Generated on Thu Dec 22 2016 00:16:58 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      "src/script/js/*.js",
      "spec/*.js"
    ],
    exclude: [],
    preprocessors: {
      'src/script/js/*.js': ['coverage']
    },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
