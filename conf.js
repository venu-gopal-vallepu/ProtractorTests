var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var conf = require('./conf.json');

exports.config = {
   framework : 'jasmine',
   seleniumAddress : conf.remoteSeleniumUrl,
   specs: [
       'specs/*.spec.js'
   ],
    capabilities: {
        name: 'protractor test', // this will show up in the UI
        // these are important :)
        browserName : "safari",
        browser_api_name: 'MblSafari9.0', // change this according to what browser you are using
        os_api_name: 'iPadPro-iOS9Sim', // change this for the OS you are using
        screen_resolution: '2732x2048', // change this for the resolution
        // 
        record_video: true,
        record_network: false,
        record_snapshot: false,
        
        // browserName: 'chrome',
        // chromeOptions: {
        //     args: ['--start-maximized']
        // }
    },
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
            // No-Op // Need to override this in order to remove the default reporter dots
        }
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
}