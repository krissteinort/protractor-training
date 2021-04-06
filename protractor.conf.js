const browserCapabilities = [
  {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    platform: 'ANY',
    version: 'ANY',
    chromeOptions: {
      args: ['--no-sandbox', '--test-type=browser', '--lang=en', '--window-size=1680,1050'],
    },
    loggingPrefs: { browser: 'SEVERE' }
  },
];

// Protractor config
exports.config = {
  allScriptsTimeout: 50 * 1000,
  directConnect: true,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 3 * 60 * 1000
  },
  specs: [
    '**/exercise-one.scenario.ts'
  ],
  multiCapabilities: browserCapabilities,
  framework: 'jasmine',

  onPrepare() {
    require('ts-node').register({
      project: 'tsconfig.e2e.json'
    });

    const JasmineConsoleReporter = require('jasmine-console-reporter');
    const consoleReporter = new JasmineConsoleReporter({
      colors: 1,
      cleanStack: 1,
      verbosity: 4,
      listStyle: 'indent',
      activity: true,
      emoji: true,
      beep: true
    });

    jasmine.getEnv().addReporter(consoleReporter);
  },
};
