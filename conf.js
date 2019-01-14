    // jetblue protractor testing
// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    // single browser testing
    capabilities: {
      browserName: 'firefox'
    },

    // This can be changed via the command line as:
  // --params.login.user 'ngrocks'
  params: {
    login: {
      user: '______',
      password: '______'
    }
  },
    
    // multiple browser testing
    // multiCapabilities: [{
    //   browserName: 'firefox'
    // }, {
    //   browserName: 'chrome'
    // }]
  }